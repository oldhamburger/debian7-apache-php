import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="largContain">
        <div style={{ height: '75vh' }} className="container valign-wrapper">
          <div className="row">
            {/* <h4 style={{ margin: '85px' }} className="flow-text">
            <b>Welcome</b> to Sprig <br />
            <br />
            <span style={{ fontFamily: 'comic sans', margin: '5px' }}>
              SAVE $$$
            </span>{' '}
            with Sprig
          </h4> */}
            <img
              src="/homeLogo.png"
      