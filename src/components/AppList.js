import React from 'react';
import { Grid, Cell } from 'react-mdl';

class AppList extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.apps = props.apps;
  }

  render () {
    const createCell = (app) => {
      return (
        <Cell col={4} phone={1}>
          <h3>{app.ApplicationName}</h3>
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
