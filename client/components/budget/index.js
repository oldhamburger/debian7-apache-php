import React, { Component } from 'react';
import { connect } from 'react-redux';
import BudgetSummary from './BudgetSummary';
import BudgetVis from './BudgetVis';
import Loading from '../dashboard/Loading';
import Footer from '../Footer';
import {
  gettingAccounts,
  gettingIncome,
  gettingTransactions,
} from '../../store/accountReducer';
import { gettingBudget } from '../../store/budgetReducer';
class BudgetIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  async componentDidMount() {
    await this.props.gettingAccounts();
    await this.props.gettingTransactions(this.props.accounts);
    await this.props.gettingIncome(this.props.accounts);
    await this.props.gettingBudget(this.props.user.id, this.props.income);
    this.setState({ loading: true });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="budgBack">
            <div className="spacer" />
            <BudgetSummary />
            <div className="visContainer