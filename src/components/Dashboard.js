import React from 'react';
import ApplicationHelper from '../businessLogic/ApplicationHelper';
import AppList from './AppList';

class Dashboard extends React.Component {
  constructor (props) {
      super(props);
      this.props = props;
      this.apps = ApplicationHelper.getApps();
  }

  pollApps () {
    this.apps = ApplicationHelper.getApps();
  }

  /*componentDidMount () {
    debugger;
    this.pollApps();
    setInterval(this.pollApps, this.props.pollInterval);
  }*/

  render () {
    return (
      <div className="release-dashboard">
        <h2 className="section-title">Applications</h2>
        <AppList apps={this.apps} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  pollInterval: React.PropTypes.number.isRequired
};

Dashboard.defaultProps = {
  pollInterval: 300000
};

export default Dashboard;
