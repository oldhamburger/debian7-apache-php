import axios from 'axios';
const jwtDecode = require('jwt-decode');
import setAuthToken from '../utils/setAuthToken';

//initialState
const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {},
};

const isEmpty = require('is-empty');
//ACTION TYPES
const CREATE_USER = 'CREATE_USER'; // for user registration
const GET_CURRENT_USER = 'GET_CURRENT_USER'; // for getting current user from login
export const GET_ERRORS = 'GET_ERRORS';

//ACTION CRETORS
export const createUser = user => ({
  type: CREATE_USER,
  user,
});

export const fetchUser = user => ({
  type: GET_CURRENT_USER,
  user,
});

export const getErrors = err => ({
  type: GET_ERRORS,
  err,
});

//Thunk - for user registration
export const createdUser = user => async dispatch => {
  try {
    const { data } = aw