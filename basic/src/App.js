import React, { Component } from 'react';

import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
