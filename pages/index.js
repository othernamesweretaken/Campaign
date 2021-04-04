import React, {Component} from 'react';

import Layout from '../components/layout';

import {Card, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import factory from '../contract/factory';
import {Link} from '../routes';
// import dynamic from "next/dynamic";
// import web3 from '../contract/web3';




class CampaignPage extends Component {
    

static async getInitialProps(){

    const campaigns = await factory.methods.getDeployedContract().call();
    return {campaigns: campaigns};
}

    // async componentDidMount(){
    //     web3 = new Web3(window.web3.currentProvider);
    //     factory.setProvider(web3);
    //     const accounts = await web3.eth.accounts;
    // }
renderCampaigns(){
    const items = this.props.campaigns.map(address => {
        return {
            header: address,
            description: <Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
            fluid: true,
            style: { overflowWrap: 'break-word'}
        };
    });
    return <Card.Group items={items}></Card.Group>;
}
    render(){
     //   console.log(this.props.campaigns);
        return (
    
            <Layout>
            <div style={{position: "absolute"}}>    
            <h3>Open Campaigns</h3>
            <Link route='/campaigns/new'>
                <a>
                    <Button floated="right" content="Create Campaign" icon ="add" primary/>
                </a>
            </Link>
            <div>{this.renderCampaigns()}</div>
            </div>
        </Layout>
       

        );
    };
}

//MUST!!! for next.js 
export default CampaignPage;