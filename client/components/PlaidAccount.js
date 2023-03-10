
import React, { Component } from 'react';
import { addingAccount } from '../store/accountReducer';
import { connect } from 'react-redux';
import PlaidLinkButton from 'react-plaid-link-button';

class PlaidAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
  }

  async handleOnSuccess(token, metadata) {
    const { accounts } = this.props;
    const plaidData = {
      public_token: token,
      metadata: metadata,
      accounts: accounts,
    };
    await this.props.addingAccount(plaidData);
    window.location.reload();
  }

  render() {
    return (
      <div id="plaid-button" className="boxes">
        <div className="newdiv">
          <PlaidLinkButton
            buttonProps={{
              className:
                'btn waves-effect waves-light hoverable accent-3 main-btn',
              id: 'plaidButton',
            }}
            plaidLinkProps={{
              clientName: 'Sprig',
              key: '371579f573cc098b5fbbee72dcc928',
              env: 'sandbox',
              product: ['transactions'],
              onSuccess: this.handleOnSuccess,
            }}
            onScriptLoad={() => this.setState(this.state)}
            id="plaid-button"
          >
            Add Accounts
          </PlaidLinkButton>
        </div>
        <p className="description">Powered by Plaid</p>
        <div className="con">
          <div className="creds">
            <h6 className="sandboxcred">
              You are connecting to Plaid sandbox environment. Please use:{' '}
            </h6>
            <p>Username: user_good</p>
            <p>Password: pass_good</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  addingAccount: plaidData => dispatch(addingAccount(plaidData)),
});

const ConnectedPlaidAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaidAccount);

export default ConnectedPlaidAccount;