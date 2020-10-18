import React from 'react';
import { connect } from 'react-redux';
import './Summary.css';
import { balancesCondensed } from './utils';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { deletingAccount } from '../../store/accountReducer';

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove = async accountName => {
    const targetAccount = this.props.accounts.filter(
      elem => elem.instit