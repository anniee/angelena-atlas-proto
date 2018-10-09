import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import losAngeles from 'routes/static/losangeles.png';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <h1>Welcome to Angelena Atlas!</h1>
        <Col xsOffset={2}>
          <img src={losAngeles} alt="LA map" />
        </Col>
      </Grid>
      );
  }
}
