import React from 'react';
import TooltipIcon from './TooltipIcon';

class ListPrimary extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    const cssClassString = `release-status ${this.props.tooltip.replace(/\s+/g, '').toLowerCase()}`;

    return (
      <span className="mdl-list__item-primary-content">
        <TooltipIcon icon={this.props.icon} tooltip={this.props.tooltip} cssClass={cssClassString} />
        <span>{this.props.title}</span>
        <span className="mdl-list__item-sub-title">{this.props.subtitle}</span>
      </span>
    );
  }
}

ListPrimary.PropTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string.isRequired
};

export default ListPrimary;
