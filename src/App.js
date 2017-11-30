import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      'Hello'
    );
  }
}

export default App;
