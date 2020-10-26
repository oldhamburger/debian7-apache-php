import React, { Component } from 'react';
import InsightCards from './InsightCards';
import BarGraph from './BarGraph';
import Footer from '../../Footer';
import Loading from '../Loading';
import { getThreeMonthsData } from '../../../store/insightReducer';
import {
  gettingAccounts,
  gettingTransactions,
} from '../../../store/accountReducer';
import { connect } from 'react-redux';
import LineGraph from './LineGraph'