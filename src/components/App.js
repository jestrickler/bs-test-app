import React, { Component } from 'react';
import Header from './Header';
import { Grid } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}
