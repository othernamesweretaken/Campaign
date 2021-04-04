import { Router } from '../routes';
import React, {Component} from 'react';
import {Form, Input, Button, Message} from 'semantic-ui-react';
import Campaign from '../contract/campaign';
import web3 from '../contract/web3';


class ContributeForm1 extends Component {
    state ={
        contributeAmount:'',
        loading:false,
        errorMessage:''
    }

    onSubmit =  async (event)=>{
        event.preventDefault();
        try{
            this.setState({loading:true, errorMessage:''});
            await window.ethereum.enable();

            //getAccounts is deprecated.
            const accounts = await window.web3.eth.accounts;
            console.log(accounts);
            const CampaignInstance = Campaign(this.props.address);
            await CampaignInstance.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.contributeAmount)
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
            
        }
        catch(err){
            this.setState({loading: false, errorMessage: err.message});
        }
        this.setState({loading: false, contributeAmount:''});  
    }
    render(){
        return(
            <div>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input label="ether" labelPosition="right" value={this.state.contributeAmount} 
                        onChange={(event)=> this.setState({contributeAmount:event.target.value})}/>

                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
            </div>
        );
    }

}

export default ContributeForm1;