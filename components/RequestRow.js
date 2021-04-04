
import React, { Component } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import web3 from '../contract/web3';
import Campaign from '../contract/campaign';

class RequestRow extends Component {
    state={
        loading: false,
        errorMessage: ''
    }
  onApprove = async () => {

    this.setState({loading: true, errorMessage:'In progress'});
    try{
    const campaign = Campaign(this.props.address);
    await window.ethereum.enable();
    const accounts = await window.web3.eth.accounts;
    await campaign.methods.approveRequest(this.props.id).send({from: accounts[0]});
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch(err){
        this.setState({errorMessage:err.message});
    }
    this.setState({loading:false});
  };

  onFinalize = async () => {
      
    this.setState({loading: true,errorMessage:'In Progress'});
    try{
    const campaign = Campaign(this.props.address);
    await window.ethereum.enable();
    const accounts = await window.web3.eth.accounts;
    await campaign.methods.finalizeRequest(this.props.id).send({from: accounts[0]});
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch(err){
        this.setState({errorMessage:err.message});
        
    }
    this.setState({loading:false});
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, totalApprovers } = this.props;
    const readyToFinalize = request.approversCount > totalApprovers / 2;

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}

      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approversCount}/{totalApprovers}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button loading={this.state.loading} color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button loading={this.state.loading} color="teal" basic onClick={this.onFinalize} >
              Finalize
            </Button>
          )}
        </Cell>
        <Cell>
           <i style={{overflow:'auto'}}> <Message  content={this.state.errorMessage}></Message></i>
        </Cell>
      </Row>
    
    );
  }
}

export default RequestRow;