import React from 'react';
import IconHelper from '../businessLogic/IconHelper';
import ListPrimary from './ListPrimary'

class Release extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.release = props.release;
  }

  render () {
    return (
      <li className="mdl-list__item mdl-list__item--two-line">
        <ListPrimary title={this.release.Build} subtitle={this.release.CurrentStageTypeName} icon={IconHelper.getIconName(this.release.StatusName)} tooltip={this.release.StatusName} />
      </li>
    );
  }
}

Release.PropTypes = {
  release: React.PropTypes.object.isRequired
};

export default Release;
