import React, {Component} from 'react';

import Layout from '../../components/layout';
import ContributeForm1 from '../../components/ContributeForm';
//import {Card, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import factory from '../contract/factory';
import {Link} from '../../routes';

import Campaign from '../../contract/campaign';
import { Card, Grid, GridColumn, Button } from 'semantic-ui-react';
import web3 from '../../contract/web3';

class CampaignShow extends Component{


    static async getInitialProps(props){
        const campaignInstance =  Campaign(props.query.address);
        const data = await campaignInstance.methods.getContractSummary().call();
        return {
            address: props.query.address,
            minimumContribution: data[0],
            totalRequest: data[1],
            balance:data[2],
            contributors:data[3],
            manager:data[4]
        };
    }
    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            totalRequest,
            contributors
        } = this.props;


        console.log(manager);
        const items=[{
            header: manager,
            meta: 'Address of Manager',
            description: 'The manager created this campaign and can create request.',
            style: { overflowWrap: 'break-word'}
        },
        {
            header: minimumContribution,
            meta: 'Minimum Contribution',
            description: 'You must contribute atleast this much amount to the campaign.'
        },
        {
            header: contributors,
            meta: 'Number of contributors',
            description: 'Number of people to contribute in this contract.'
        },
        {
            header: totalRequest,
            meta: 'Number of request',
            description: 'A request withdraws money from contract on approval of contributors.'
        },
        {
            header: web3.utils.fromWei(balance,'ether'),
            meta: 'Campaign Balance (ether)',
            description: 'The amount of ether the contract has left to spend.'
        }
        ];


        return <Card.Group items={items}/>;
    }
    render(){
        return(
            <Layout>
                <div style={{position: "absolute"}}>
            <h3>Campaign Show</h3>
            <Grid>
              <Grid.Row>
                <Grid.Column width={9}>{this.renderCards()}</Grid.Column>
    
                <Grid.Column width={5}>
                  <ContributeForm1 address={this.props.address} />

                  <br/><br/>
                  <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                      <Button primary>View Requests</Button>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid.Row>
    
              {/* <Grid.Row>
                <Grid.Column>

                </Grid.Column>
              </Grid.Row> */}
            </Grid>
            </div>
          </Layout>
        );
    }
}

export default CampaignShow;