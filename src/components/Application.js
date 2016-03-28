import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import ReleaseList from './ReleaseList';
import ColorHelper from '../businessLogic/ColorHelper';
import FavButton from './FavButton';
import HideButton from './HideButton';

class Application extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    const headerColor = ColorHelper.getColor();

    return (
      <Card shadow={1} key={this.props.AppId}>
        <CardTitle style={{'background-color': headerColor}}>{this.props.AppName}</CardTitle>
        <CardText>
          <ReleaseList releases={this.props.Releases} />
        </CardText>
        <CardMenu>
          <FavButton appId={this.props.AppId}/>
          <HideButton appId={this.props.AppId}/>
        </CardMenu>
      </Card>
    );
  }
}

Application.PropTypes = {
  AppId: React.PropTypes.number.isRequired,
  AppName: React.PropTypes.string.isRequired,
  Releases: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Application;
