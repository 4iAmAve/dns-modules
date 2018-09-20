import * as React from 'react';
import { deepEqual } from '@dns/utils';

import { Input } from '../Input/Input';

import './SelectDropdown.css';

export interface SelectDropdownProps {
  selectedValue: number | string;
  defaultValue?: number;
  classNames?: any;
  filterable?: boolean;
  label?: string;
  options?: any;
  resetable?: boolean;
  resetLabel?: string | boolean;
  onChange?: (event: any) => void;
}

export interface SelectDropdownState {
  isOpen: boolean;
  listLeftValue: number;
  listTopValue: number;
  listWidthValue: number;
  isSelected: string | number;
  searchValue: string;
  selected: {
    key: string | number,
    label: string,
  };
}

export class SelectDropdown extends React.Component<SelectDropdownProps, SelectDropdownState> {
  public static defaultProps: Partial<SelectDropdownProps> = {
    defaultValue: 0,
    filterable: false,
    resetLabel: 'No value',
  };

  private mounted;
  private wrapper: HTMLElement;
  private list: HTMLElement;
  private selected: HTMLElement | null;
  private scrollView: HTMLElement;

  constructor(props: SelectDropdownProps) {
    super(props);

    // find selected value by dataValue
    const selectedValueArray = props.options.filter((value: any) => {
      return value.key === props.selectedValue;
    });
    const selectedValue = selectedValueArray[0];

    this.state = {
      isOpen: false,
      listTopValue: 0,
      listWidthValue: 0,
      listLeftValue: 0,
      isSelected: selectedValue ? selectedValue.key : '',
      searchValue: '',
      selected: {
        key: selectedValue ? selectedValue.key : props.selectedValue,
        label: selectedValue ? selectedValue.label : props.label,
      },
    };

    this.mounted = true;
  }

  public componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  public componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  public componentDidUpdate(prevProps: SelectDropdownProps, prevState: SelectDropdownState) {
    if (this.list && prevState.isOpen !== this.state.isOpen) {
      this.countTopRmsList();
    }
    if (prevProps.selectedValue !== this.props.selectedValue) {
      // find selected value by dataValue
      const selectedValueArray = this.props.options.filter((value: any) => {
        return value.key === this.props.selectedValue;
      });
      const selectedValue = selectedValueArray[0];

      this.setState({
        isSelected: selectedValue ? selectedValue.key : '',
        selected: {
          key: selectedValue ? selectedValue.key : this.props.selectedValue,
          label: selectedValue ? selectedValue.label : this.props.label,
        },
      });
    }
    if (!deepEqual(prevProps.options, this.props.options)) {
      const selectedValueArray = this.props.options.filter((value: any) => {
        return value.key === this.props.selectedValue;
      });
      const selectedValue = selectedValueArray[0];

      this.setState({
        isSelected: selectedValue ? selectedValue.key : '',
        selected: {
          key: selectedValue ? selectedValue.key : this.props.selectedValue,
          label: selectedValue ? selectedValue.label : this.props.label,
        },
      });
    }
  }
  // the simplest way to get selected value
  public getValue() {
    return this.state.selected.label;
  }

  public getLabel() {
    return this.state.selected.label;
  }

  public handleToggleSelect() {
    const { left, top, width } = this.wrapper.getBoundingClientRect();
    this.setState({
      isOpen: !this.state.isOpen,
      listLeftValue: left,
      listTopValue: top,
      listWidthValue: width,
    });
  }

  public handleOptionClick(key: number, option: any) {
    this.changeState({
      isOpen: false,
      listTopValue: this.state.listTopValue,
      listLeftValue: this.state.listLeftValue,
      listWidthValue: this.state.listWidthValue,
      isSelected: option.key,
      searchValue: '',
      selected: {
        key: option.key,
        label: option.label,
        ...option,
      },
    });
  }

  // change state with callback function
  public changeState(newState: SelectDropdownState) {
    this.fireChangeEvent(newState);
    this.setState(newState);
  }

  public handleResetSelect() {
    this.changeState({
      isOpen: false,
      listTopValue: this.state.listTopValue,
      listLeftValue: this.state.listLeftValue,
      listWidthValue: this.state.listWidthValue,
      isSelected: '',
      searchValue: '',
      selected: {
        key: -1,
        label: this.props.label || '',
      },
    });
  }

  handleDocumentClick = (evt: any) => {
    if (this.mounted) {
      const area = this.wrapper;
      const TIMEOUT = 5;

      if (area && !area.contains(evt.target)) {
        // @TODO dirty workaround to avoid race condition -> get rid of it
        setTimeout(
          () => {
            this.setState({
              isOpen: false,
            });
          },
          TIMEOUT
        );
      }
    }
  }

  // fire callback function
  public fireChangeEvent(newState: SelectDropdownState) {
    if (newState.selected.label !== this.state.selected.label && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  public countTopRmsList() {
    // const offsetHeightBottom = -this.list.offsetHeight / 2 + bottomMargin;
    const offsetListToWrapper =
      this.wrapper.getBoundingClientRect().top + this.list.getBoundingClientRect().height;
    const offsetHeightBottom = document.body.offsetHeight - this.list.getBoundingClientRect().height - 8;

    this.setState({
      listTopValue: offsetListToWrapper < document.body.offsetHeight ?
        this.state.listTopValue : offsetHeightBottom,
    });
  }

  public generateOptions = () => {
    const { options } = this.props;
    const { searchValue } = this.state;
    const list = Object.assign([], options);

    return list.filter(option => option.label.indexOf(searchValue) > -1);
  }

  public getSelectedPosition = () => {
    if (this.selected && this.scrollView) {
      const center = this.scrollView.offsetHeight / 2;
      const offset = (this.selected.offsetTop - center) - this.scrollView.offsetTop;
      this.scrollView.scrollTop = this.scrollView.scrollTop + offset;
    }
  }

  public handleFilterChange = (e: any) => this.setState({ searchValue: e.target.value });
  public handleWrapperRef = ref => this.wrapper = ref;
  public handleListRef = ref => this.list = ref;
  public handleScrollViewRef = ref => this.scrollView = ref;
  public handleSelectedRef = (ref: any, key: any) => {
    const { isSelected } = this.state;
    const selected = isSelected.toString();

    if (selected.length) {
      if (key === isSelected) {
        this.selected = ref;
      }
    } else {
      this.selected = null;
    }
  }

  render() {
    const { classNames, filterable, label, resetLabel, /*options,*/ resetable = true } = this.props;
    const listStyle = {
      left: this.state.listLeftValue,
      top: this.state.listTopValue,
      width: this.state.listWidthValue,
    };
    const { isOpen, isSelected, searchValue, selected } = this.state;
    const selection = isSelected.toString();
    const optionsList = this.generateOptions();
    this.getSelectedPosition();

    return (
      <div
        className={`
          select-dropdown_wrapper
          ${classNames ? classNames : ''}
        `}
        ref={this.handleWrapperRef}
      >
        <div
          className={`select-dd_text ${selection.length ? '' : 'select-dd_text--empty'}`}
          onClick={() => this.handleToggleSelect()}
        >
          <div>
            <div className="select-dd_text_value">{selected.label ? selected.label : ''}</div>
          </div>
        </div>
        <label
          className={`
            select-dd_label
            ${selection.length ? '' : 'select-dd_label--unselected-label'}
          `}
        >
          {label}
        </label>
        <i
          onClick={() => this.handleToggleSelect()}
          className={`material-icons select-dd_caret`}
        >
          arrow_drop_down
        </i>
        {
          isOpen &&
          <ul
            ref={this.handleListRef}
            className={`
                select-dd_list ${resetable ? 'select-dd_list--wrl' : ''} ${filterable ? 'select-dd_list--wf' : ''}
              `}
            style={listStyle}
          >
            {
              filterable ?
                <li
                  className={`select-dd_list-item select-dd_list-item--filterable`}
                >
                  <Input
                    label={searchValue.length ? '' : 'Search'}
                    onKeyUp={this.handleFilterChange}
                    value={searchValue}
                    autoFocus={true}
                    squared={true}
                  />
                  <i className="material-icons">search</i>
                </li> : null
            }
            {
              resetable && resetLabel &&
              <li
                className={`select-dd_list-item select-dd_list-item--reset`}
                onMouseDown={() => this.handleResetSelect()}
                onClick={() => this.handleResetSelect()}
              >
                {resetLabel}
              </li>
            }
            <div className="select-dd_list_scrollable" ref={this.handleScrollViewRef}>
              {
                optionsList && optionsList.length ?
                  optionsList.map((option: any, key: number) => {
                    return (
                      <li
                        key={'dns-dd-select_' + option.key}
                        className={`
                              select-dd_list-item ${option.key === isSelected ? 'select-dd_list-item--active' : ''}
                            `}
                        value={key}
                        onMouseDown={() => this.handleOptionClick(key, option)}
                        onClick={() => this.handleOptionClick(key, option)}
                        ref={ref => this.handleSelectedRef(ref, option.key)}
                      >
                        {option.label}
                      </li>
                    );
                  }) : null
              }
            </div>
          </ul>
        }
      </div>
    );
  }
}
