import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import cx from 'classnames'; //eslint-disable-line
import css from 'importcss'; //eslint-disable-line

@css(require('./Avatar.css'))
class Avatar extends Component {
  static defaultProps = {
    alt: '',
    src: null,
    title: '',
    size: 'default',
    renderType: 'default',
    shadow: false,
    border: false,
    color: 'rgba(0,0,0,0.5)',
    statusType: 'default',
    srcset: null,
  };

  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large', 'larger', 'default']),
    renderType: PropTypes.oneOf(['round', 'default', 'rounded']),
    shadow: PropTypes.bool,
    border: PropTypes.bool,
    color: PropTypes.string,
    statusType: PropTypes.oneOf(['on', 'off', 'default']),
    srcset: PropTypes.string,
  };

  get defaultAvatar() {
    return 'https://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png';
  }

  render() {
    const { size, alt, src, title, renderType, shadow, border, statusType, srcset } = this.props;
    let { color } = this.props;
    let statusFlag = '';

    if (statusType !== 'default') {
      statusFlag = (<span styleName={cx({ status: true })}>&nbsp;</span>);
      if (color === 'rgba(0,0,0,0.5)')
        color = statusType === 'on' ? 'green' : 'red';
    }

    return (
      <div styleName={cx({
        avatar: true,
        offline: statusType === 'off',
        online: statusType === 'on',
        w54: size === 'default',
        w32: size === 'small',
        w100: size === 'large',
        w200: size === 'larger'
      })}>
        <img
          styleName={cx({
            round: renderType === 'round',
            rounded: renderType === 'rounded',
            shadow,
            border
          })}
          style={{
            borderColor: color,
            color
          }}
          alt={alt}
          src={src || defaultAvatar}
          title={title}
          srcset={srcset}
          onError={(e)=>{e.target.src=this.defaultAvatar}} />
        {statusFlag}
      </div>
    );
  }
}

export default Avatar;
