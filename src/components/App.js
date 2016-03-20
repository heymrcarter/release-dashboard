import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const App = (props) => {
  return (
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
      <Header transparent title="Release Dashboard" style={{color: 'white'}}>
        <Navigation>
          <Link to="/dashboard">Dashboard</Link>
        </Navigation>
      </Header>
      <Drawer title="Release Dashboard">
        <Navigation>
          <Link to="/dashboard">Dashboard</Link>
        </Navigation>
      </Drawer>

      <Content>
        {props.children}
      </Content>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
