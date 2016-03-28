import React from 'react';
import Release from './Release';

class ReleaseList extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    const createRelease = (release) => {
      return (
        <Release release={release} />
      );
    };

    return (
      <ul className="mdl-list">
        {this.props.releases.map(createRelease)}
      </ul>
    );
  }
}

ReleaseList.PropTypes = {
  releases: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default ReleaseList;
