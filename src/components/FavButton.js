import React from 'react';
import { IconButton } from 'react-mdl';

class FavButton extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <IconButton name="favorite" style={{color: 'red'}} onClick={this.favApp}/>
    );
  }

  favApp (appId) {
    console.log(`${this.props.appId} faved!`);
  }
}

FavButton.PropTypes = {
  appId: React.PropTypes.number.isRequired
};

export default FavButton;
