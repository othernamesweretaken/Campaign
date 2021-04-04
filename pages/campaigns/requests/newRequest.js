
import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../contract/campaign';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../contract/web3';


class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const {address} = props.query;
    const campaignCheck = Campaign(props.query.address);
    const manager  = await campaignCheck.methods.manager().call();
  //  console.log(campaignCheck);
    return {address, manager };
}


  onSubmit = async (event) => {
    event.preventDefault();

    const { description, value, recipient } = this.state;


    try {
      
        this.setState({ loading: true, errorMessage: '' });
      //  console.log("hi");
        const campaignInstance = await Campaign(this.props.address);
        //console.log(campaignInstance);
        await window.ethereum.enable();
        //console.log("2");
        const accounts = await window.web3.eth.accounts;
        console.log(accounts);

        await campaignInstance.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({from: accounts[0]});

        Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
                   <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
        <h4>Only manager can create the request - i.e. {this.props.manager} </h4>
      </Layout>
    );
  }
}

export default RequestNew;

