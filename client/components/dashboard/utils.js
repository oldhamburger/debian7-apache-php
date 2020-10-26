import { simplifyMonthly } from '../../store/utils';

//reformats this.props.transactions to include transactions across accounts in a flat array. NOTE: account name is not included.

// returns amount spent on a given category ACROSS accounts - takes this.props.transactions and a category string
export const getCategorySp