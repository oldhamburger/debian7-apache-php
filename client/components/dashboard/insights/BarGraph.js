import React from 'react';
import { Bar } from 'react-chartjs-2';
import { condenseTotalMonthly } from '../utils';

const data = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: ['#A8DADC', '#f9bd49', '#1D3557'],
      hoverBackgroundColor: ['#40bcc1', '#dda412', '#04142b'],
      borderColor: 'rgb(214, 214, 214)',
      hoverBorderColor: 'rgb(255,250,250)',
    },
  ],
};

const options = {
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: 'black',
    },
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      top: 50,
      bottom: 40,
    },
    maintainAspectRatio: false,
    responsive: true,
  },
};

export default class 