import React from 'react';

class TooltipIcon extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    const hash = `tt-${Math.floor(Math.random()*90000) + 10000}`;

    return (
      <div>
        <div id={hash} className={`icon material-icons mdl-list__item-avatar ${this.props.cssClass}`}>{this.props.icon}</div>
        <div className="mdl-tooltip" for={hash}>{this.props.tooltip}</div>
      </div>
    );
  }
}

TooltipIcon.PropTypes = {
  icon: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string.isRequired
};

export default TooltipIcon;
