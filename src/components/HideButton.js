import React from 'react';
import { IconButton } from 'react-mdl';

class HideButton extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <IconButton name="cancel" style={{color: '#000'}}/>
    );
  }
}

HideButton.PropTypes = {
  appId: React.PropTypes.number.isRequired
};

export default HideButton;
