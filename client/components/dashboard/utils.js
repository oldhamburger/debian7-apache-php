import { simplifyMonthly } from '../../store/utils';

//reformats this.props.transactions to include transactions across accounts in a flat array. NOTE: account name is not included.

// returns amount spent on a given category ACROSS accounts - takes this.props.transactions and a category string
export const getCategorySpend = (transactionProps, category) => {
  return transactionProps
    .filter(elem => {
      return elem.category[0] === category;
    })
    .reduce((accum, elem) => {
      return (accum += elem.amount);
    }, 0);
};

// returns the largest transaction in the last 30 days - does not include credit card payments or account transfers

export const getLargestTransaction = transactionProps => {
  return transactionProps.reduce(
    (accum, elem) => {
      if (
        accum.amount < elem.amount &&
        !elem.category.includes('Payment') &&
        !elem.category.includes('Transfer')
      ) {
        accum.amount = elem.amount;
        accum.merchant = elem.name;
        accum.date = new Date(elem.date);
      }
      return accum;
    },
    {
      amount: 0,
      merchant: '',
    }
  );
};

// this returns an object of arrays with spending categories and corresponding ammounts spent
export const allCategorySpend = transactions => {
  let labels = [];
  let spend = [];
  transactions.map(elem => {
    if (
      !labels.includes(elem.c