import React, { PropTypes } from 'react';

import PlaceHolderImageStyle from './PlaceHolderImage.css';

class PlaceHolderImage extends React.Component {
  static propTypes = {
    iconImage: PropTypes.string,
    text: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    aspectRatio: PropTypes.number,
  };

  static defaultProps = {
    iconImage: './wemoIcon-sm-opaque.png',
    text: '鴻海優惠活動',
    height: null,
    width: null,
    aspectRatio: null,
  };

  render() {
    const style = { backgroundColor: '#FEFEFE' };

    if (this.props.height && this.props.width) {
      style.height = this.props.height;
      style.width = this.props.width;
    } else if (this.props.aspectRatio) {
      style.width = '100%';
      style.paddingTop = `${100 / this.props.aspectRatio}%`;
    }

    return (
      <div style={ style }>
        <div className={ PlaceHolderImageStyle.content }>
          <img style={{ verticalAlign: 'middle' }} src={this.props.iconImage} />
          {this.props.text &&
            <span style={{ marginLeft: '10px' }}>
              {this.props.text}
            </span>
          }
        </div>
      </div>
    )
  }
}

export default PlaceHolderImage;