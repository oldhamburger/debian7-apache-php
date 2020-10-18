import React, { Component } from "react";
import Summary from "./Summary";
import ConnectedPlaidAccount from "../PlaidAccount";
import PlaidAccountTransactions from "../dashboard/Transaction";
import InsightCard from "./insights/InsightCards";
import { connect } from "react-redux";
import CategoriesDonut from "./CategoriesDonutChart";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  gettingAccounts,
  gettingTransactions,
  gettingBalance
} from "../../store/accountReducer";
import {
  getLargest,
  getRestaurantSpend,
  getMerchantSpend,
  getTranspoSpend,
  getFees
} from "../../store/insightReducer";

import Loading from "./Loading";

import { logoutUser } from "../../store/userReducer";
import "../dashboard/Summary.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.gettingAccounts();
    const { accounts } = this.props;
    if (this.props.accounts.length) {
 