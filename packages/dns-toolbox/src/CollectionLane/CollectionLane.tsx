import * as React from 'react';

import { ActivityIndicatorBar } from '../ActivityIndicatorBar/ActivityIndicatorBar';
import { IconButton } from '../IconButton/IconButton';

import './CollectionLane.css';

export interface CollectionLaneProps {
  label: string;
}

export interface CollectionLaneState {
  atBeginning: boolean;
  atEnd: boolean;
  imageSize: number;
}

export class CollectionLane extends React.Component<CollectionLaneProps, CollectionLaneState> {
  private collectionLane: HTMLElement;
  private collectionContent: HTMLElement;

  public constructor(props: CollectionLaneProps) {
    super(props);

    this.state = {
      atBeginning: true,
      atEnd: false,
      imageSize: 300,
    };
  }

  public getDiff = () => {
    let { imageSize } = this.state;
    if (!imageSize) {
      imageSize = 300;
    }
    return Math.floor(this.collectionLane.offsetWidth / imageSize);
  }

  public getOffset = () => {
    let { imageSize } = this.state;
    if (!imageSize) {
      imageSize = 300;
    }
    const diff = this.getDiff();
    return (imageSize * diff) + 10;
  }

  public detectBorders = (position: any) => {
    const { atBeginning, atEnd } = this.state;

    if (position <= 0 && !atBeginning) {
      this.setState({ atBeginning: true });
    } else if (position > 0 && atBeginning) {
      this.setState({ atBeginning: false });
    }

    const offset = this.collectionContent.scrollWidth - this.collectionContent.offsetWidth;

    if (position >= offset && !atEnd) {
      this.setState({ atEnd: true });
    }
    if (position < offset && atEnd) {
      this.setState({ atEnd: false });
    }
  }

  public scrollAnimator = (dir) => {
    let x = 0;
    const i = 8;
    const timer = () => {
      setTimeout(
        () => {
          x++;
          if (dir === 'next') {
            this.collectionContent.scrollLeft = this.collectionContent.scrollLeft + i;
          } else if (dir === 'prev') {
            this.collectionContent.scrollLeft = this.collectionContent.scrollLeft - i;
          }
          if (x < (this.getOffset() / i)) {
            timer();
          } else {
            this.detectBorders(this.collectionContent.scrollLeft);
          }
        },
        0);
    };
    timer();
  }

  public scrollHandler = (e: any) => {
    this.detectBorders(e.target.scrollLeft);
  }

  public handleAddTableGroup = () => {
    console.log('handleAddTableGroup');
  }

  handleCollectionContentRef = ref => this.collectionContent = ref;
  handleCollectionLaneRef = ref => this.collectionLane = ref;

  public render() {
    const { label } = this.props;
    return (
      <div className="collection-lane" ref={this.handleCollectionLaneRef}>
        <h3 className="collection-lane_title">{label}</h3>
        <div className="collection-lane_action">
          <IconButton icon="search" />
          <IconButton icon="add" />
        </div>
        <ActivityIndicatorBar loading={false} />
        <div className="collection-lane_wrapper">
          <div
            className="collection-lane_content"
            ref={this.handleCollectionContentRef}
            onScroll={this.scrollHandler}
          >
            <div className="collection-lane_list">
              <div>Table 1</div>
              <div>Table 2</div>
              <div>Table 3</div>
              <div>Table 4</div>
              <div>Table 5</div>
            </div>
          </div>
          <div className="collection-lane_shadow" />
        </div>
      </div>
    );
  }
}
