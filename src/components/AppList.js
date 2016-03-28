import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Application from './Application';

class AppList extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.apps = props.apps;
  }

  render () {
    const createCell = (app) => {
      return (
        <Cell col={3} phone={1}>
          <Application AppId={app.ApplicationId} AppName={app.ApplicationName} Releases={app.Releases} />
        </Cell>
      );
    };

    return (
      <div>
        <Grid className="demo-grid-ruler">
          {this.apps.map(createCell)}
        </Grid>
      </div>
    );
  }
}

AppList.propTypes = {
  apps: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default AppList;
