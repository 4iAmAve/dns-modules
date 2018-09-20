import * as React from 'react';

import { AutoCompleteSelection, Chip } from '../definitions';
import { Chips } from '../Chips/Chips';

import './Autocomplete.css';

export interface AutocompleteProps {
  autocompleteSelection: AutoCompleteSelection[];
  chips?: Chip[];
  classNames?: any;
  disabled?: boolean;
  noDuplicates?: boolean;
  placeholder?: string | null;
  onSelection: (key: number, selection: any) => void;
  required?: boolean;
  rootID?: string;
  value?: string;
  squared?: boolean;
  onBlur?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onDeleteChip?: (chip: any, key: number) => void;
}

export interface AutocompleteState {
  autocompleteVisible: boolean;
  left: number;
  top: number;
  selectedItem: number;
  value: string;
  width: number;
}

export class Autocomplete extends React.Component<AutocompleteProps, AutocompleteState> {
  public static defaultProps: Partial<AutocompleteProps> = {
    rootID: 'root',
    placeholder: null,
  };

  private autocomplete: HTMLElement;
  private input: HTMLElement;
  private backSpaceClicked: boolean = false;

  public constructor(props: AutocompleteProps) {
    super(props);

    this.state = {
      autocompleteVisible: false,
      left: 0,
      top: 0,
      selectedItem: -1,
      value: props.value || '',
      width: 0,
    };
  }

  public componentDidUpdate(prevProps: AutocompleteProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value || '' });
    }
  }

  public componentDidMount() {
    this.handleEventListeners('add');
  }

  public componentWillUnmount() {
    this.handleEventListeners();
  }

  public getElement = () => {
    const { rootID } = this.props;
    const element = document.getElementById(rootID || 'root') as HTMLElement;
    if (element === null || element === undefined) {
      return false;
    }
    return element;
  }

  public getSelectionList = () => {
    const { autocompleteSelection } = this.props;
    const { value } = this.state;
    const list = Object.assign([], autocompleteSelection);

    return list.filter((selection: AutoCompleteSelection) =>
      selection.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  public getSelectedItemValue = (id: number) => {
    const selections = this.getSelectionList();
    let value = null as any;

    if (selections.length) {
      selections.map((selection: any, key: number) => {
        if (key === id) {
          value = selection;
        }
      });
    }

    return value;
  }

  public handleEventListeners = (type?: string) => {
    const element = this.getElement();

    if (element) {
      if (type === 'add') {
        element.addEventListener('click', this.handleDocumentClick);
      } else {
        element.removeEventListener('click', this.handleDocumentClick);
      }
    }
  }

  handleDocumentClick = (evt: any) => {
    const area = this.autocomplete;

    if (area && !area.contains(evt.target)) {
      this.setState({ autocompleteVisible: false });
    }
  }

  public handleChipDelete = (chip: any, key: number) => {
    if (this.props.onDeleteChip) {
      this.props.onDeleteChip(chip, key);
    }
  }

  public handleKeyUp = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const { selectedItem, value } = this.state;

    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }

    if (e.keyCode === 8) {
      const { chips } = this.props;
      if (chips && chips.length && !value.length) {
        if (this.backSpaceClicked) {
          this.backSpaceClicked = false;
          const lastChip = Object.assign({}, chips[chips.length - 1]);
          this.handleChipDelete(lastChip, chips.length - 1);
        } else {
          this.backSpaceClicked = true;
        }
      }
    } else if (e.keyCode === 13) {
      const { chips } = this.props;
      const key = chips ? chips.length : 0;
      let content = e.target.value as any;

      if (selectedItem >= 0) {
        content = this.getSelectedItemValue(selectedItem);
      }

      this.props.onSelection(key, content);
      this.setState({ value: '', autocompleteVisible: false });
    } else if (e.keyCode === 40) {
      let selection = this.state.selectedItem + 1;
      const selectionList = this.getSelectionList();

      if (selection > selectionList.length - 1) {
        selection = 0;
      }

      this.setState({ selectedItem: selection });
    } else if (e.keyCode === 38) {
      let selection = this.state.selectedItem - 1;

      if (selection < 0) {
        selection = 0;
      }

      this.setState({ selectedItem: selection });
    }
  }

  public handleChange = (e: any) => {
    this.setState({ value: e.target.value });
  }

  public handleInputFocus = (e: any) => {
    const { top, height } = e.target.getBoundingClientRect();
    const { left } = this.autocomplete.getBoundingClientRect();

    this.setState({
      top: top + height + 16,
      left,
      width: this.autocomplete.offsetWidth,
      autocompleteVisible: true,
    });
  }

  public handleBlur = (e: any) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  public handleAutocompleteSelection = (key: number, selection: any) => {
    this.setState({ autocompleteVisible: false, value: '' });
    this.props.onSelection(key, selection);
  }

  public handleSelectionKeyUp = (e: any) => {
    console.log('handleSelectionKeyUp', e);
  }

  public calcTopValue = (top: number, selectionList: Array<any>) => {
    let topValue = top;

    if (this.autocomplete && this.input) {
      const { bottom, height: aCHeight } = this.autocomplete.getBoundingClientRect();
      const { height: iHeight } = this.input.getBoundingClientRect();

      const offsetHeightBottom = this.input.clientHeight + this.autocomplete.clientHeight + bottom + aCHeight;

      if (document.body.offsetHeight < offsetHeightBottom) {
        topValue = top - (selectionList.length * 38) - (iHeight * 2);
      }
    }

    return topValue;
  }

  handleAutocompleteRef = ref => this.autocomplete = ref;
  handleInputRef = ref => this.input = ref;

  public render() {
    const { chips, classNames, disabled, placeholder, required, squared } = this.props;
    const { autocompleteVisible, left, selectedItem, top, value, width } = this.state;
    const selectionList = this.getSelectionList();
    const topValue = this.calcTopValue(top, selectionList);
    const autocompleteInlineStyle = {
      top: topValue,
      left,
      width,
    };
    let smallLabel = !!(value && value.length);
    if (chips && chips.length) {
      smallLabel = true;
    }

    return (
      <div
        className={`
          auto-complete
          ${classNames ? classNames : ''}
          ${disabled ? 'auto-complete--disabled' : ''}
          ${chips && chips.length ? 'auto-complete--with-chips' : ''}
          ${squared ? 'auto-complete--not-rounded' : ''}
        `}
        ref={this.handleAutocompleteRef}
      >
        {
          chips ?
            <Chips chips={chips} onDeleteChip={this.handleChipDelete} /> : null
        }
        <label className={`${smallLabel ? 'input_label--small' : ''}`}>
          {placeholder}
          {required ? <span className="input_required">*</span> : null}
        </label>
        <div className="auto-complete-input_wrapper">
          <input
            type="text"
            className="auto-complete-input"
            onFocus={this.handleInputFocus}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            onBlur={this.handleBlur}
            ref={this.handleInputRef}
            tabIndex={disabled ? -1 : 1}
            value={value}
          />
        </div>
        {
          autocompleteVisible && !disabled ?
            <div className="auto-complete-container" style={autocompleteInlineStyle}>
              <ul>
                {
                  selectionList.map((selection: AutoCompleteSelection, key: number) => (
                    <li
                      key={key}
                      className={`${selectedItem === key ? 'acc_item--selected' : ''}`}
                      onClick={() => this.handleAutocompleteSelection(key, selection)}
                      onKeyUp={e => this.handleSelectionKeyUp(e)}
                    >
                      {selection.title}
                    </li>
                  ))
                }
              </ul>
            </div> : null
        }
      </div>
    );
  }
}
