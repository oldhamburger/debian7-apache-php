import React from 'react';
import { connect } from 'react-redux';
import { loggedInUser } from '../store/userReducer';
import { Link } from 'react-router-dom';
import './dashboard/Summary.css';
import HomeIcon from '@material-ui/icons/Home';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      errMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push({
        pathname: '/dashboard',
      });
    }
  }
  componentWillReceiveProps(nextProps) {
   