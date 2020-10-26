import React from 'react';
import { Line } from 'react-chartjs-2';
import { finalLineGraphData } from '../utils';
import { gettingAccounts } from '../../../store/accountReducer';
import { getThreeMonthsDataCategory } from '../../../store/insightReducer';
import { connect } from 'react-redux';

const data = {
  labels: [],
  dataset