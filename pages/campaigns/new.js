import React, {Component} from 'react';

import {Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../contract/factory';
import Layout from '../../components/layout';
import {Router} from '../../routes';

 import Web3 from 'web3';
// import web3 from '../../contract/web3';

//import 'semantic-ui-css/semantic.min.css';

let accounts;
class CampaignNew extends Component{

    // async componentDidMount(){
    //     web3 = new Web3(window.web3.currentProvider);
    //     factory.setProvider(web3);
    //     accounts = await web3.eth.getAccounts();
    //     console.log(accounts);
    // }

    state = {
        minimumContribution:'',
        errorMessage:'',
        loading: false
    }

    onSubmit = async (event)=>{
        event.preventDefault();
        try{
        this.setState({loading:true, errorMessage:''});
        await window.ethereum.enable();
//Get Accounts doesnot work any more. Much time wasted here.
        accounts = await web3.eth.accounts;
        console.log(accounts);
        await factory.methods.createCampaign(this.state.minimumContribution).send({from: accounts[0]});  
        this.setState({loading:false});
        Router.pushRoute('/');  
        }
        catch(err){
            this.setState({loading: false,errorMessage: err.message});
        }
       
    };

    render(){
//error in form field used to handle the error on load. Error will only generate if there is a change in error message
        return(
        <Layout>
            <div>
            Create a new Campaign.
            </div>

            
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution Amount</label>
                    <Input label="wei" labelPosition="right" value = {this.state.minimumContribution} 
                    onChange = {event => this.setState({minimumContribution: event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>Create !</Button>
            </Form>
        </Layout>
        );
    }

}

export default CampaignNew;