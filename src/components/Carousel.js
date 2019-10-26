import React, { Component } from 'react';
import { AppContext } from '../ContextProvider';

import Slide from './Slide';
import LeftBtn from './LeftBtn';
import RighBtn from './RightBtn';
import imageSrcs from './imageSrcs';

export default class Carousel extends Component {
  static contextType = AppContext;
  state = {
    src: 0,
    imagesLength: imageSrcs.length,
    translateValue: 0
  };

  handleClickRight = src => {
    if (src < this.state.imagesLength - 1) {
      src = src + 1;
      console.log('increment src', src);

      this.setState({ src });
    } else if (src === this.state.imagesLength - 1) {
      src = 0;
      this.setState({ src });
    }
  };

  handleClickLeft = src => {
    if (src > 0) {
      src = src - 1;

      this.setState({ src });
    } else if (src === 0) {
      src = this.state.imagesLength - 1;
      this.setState({ src });
    }
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  render() {
    let { src } = this.state;

    return (
      <div className="carousel">
        <LeftBtn onClick={e => this.handleClickLeft(src)} />

        <Slide src={imageSrcs[src]} />

        <RighBtn onClick={e => this.handleClickRight(src)} />
      </div>
    );
  }
}
