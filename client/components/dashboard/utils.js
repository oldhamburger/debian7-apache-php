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
      !labels.includes(elem.category[0]) &&
      !elem.category.includes('Payment') &&
      !elem.category.includes('Transfer')
    ) {
      labels.push(elem.category[0]);
      spend.push(getCategorySpend(transactions, elem.category[0]));
    }
  });
  return { labels, spend };
};

//this function uses the fetched data from the balances and filters it to show only
//Checking and Savings accounts only
export const fetchBalanceSummary = balances => {
  return balances.map(elem => {
    elem.balance = elem.balance.filter(ele => {
      return ele.name === 'Plaid Checking' || ele.name === 'Plaid Saving';
    });
    return elem;
  });
};

//this uses fetchBalanceSummary to condense everything so make sure
//when we call this function we are sending in the ORIGINAL DATA FROM PLAID
export const balancesCondensed = arr => {
  const newArray = fetchBalanceSummary(arr);
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    let obj = {};
    obj.accountName = newArray[i].accountName;
    let balanceArray = newArray[i].balance;
    obj.Checking = balanceArray[0].balances.