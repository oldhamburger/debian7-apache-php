import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="paddingFoot">
          <div className="row">
            <div id="footer-cont">
              <img height="55px" src="/navBarLogo.png" />

              <div>
                <p className="grey-text text-lighten-4">Terms of service</p>
              </div>

              <div>
                <p className="grey-text text-lighten-4">About</p>
              </div>
              <div>
                <a href="/dashboard">
                  <p className="grey-text text-lighten-4">Dashboard</p>
                </a>
   