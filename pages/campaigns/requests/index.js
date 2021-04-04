import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../contract/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const totalApprovers = await campaign.methods.totalApprovers().call();
    
        const requests = await Promise.all(
        //Array(5).fill().map((element,index)=>{index})  ==> output = [0,1,2,3,4]

            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
              return campaign.methods.allRequests(index).call();
            })
        );
        //console.log(totalApprovers);
        return { address, requests, requestCount, totalApprovers };
      }
    
      renderRows() {
        return this.props.requests.map((request, index) => {
          return (
            <RequestRow
              key={index}
              id={index}
              request={request}
              address={this.props.address}
              totalApprovers={this.props.totalApprovers}
            />
          );
        });
      }
    
      render() {
        const { Header, Row, HeaderCell, Body } = Table;
        
        return (
          <Layout>
            <h3>Requests</h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
              <a>
                <Button primary floated="right" style={{ marginBottom: 10 }}>
                  Add Request
                </Button>
              </a>
            </Link>
            <Table>
              <Header>
                <Row>
                  <HeaderCell>ID</HeaderCell>
                  <HeaderCell>Description</HeaderCell>
                  <HeaderCell>Amount</HeaderCell>
                  <HeaderCell>Recipient</HeaderCell>
                  <HeaderCell>Approval Count</HeaderCell>
                  <HeaderCell>Approve</HeaderCell>
                  <HeaderCell>Finalize</HeaderCell>
                  <HeaderCell>Transaction status</HeaderCell>
                </Row>
              </Header>
              <Body>{this.renderRows()}</Body>
            </Table>
            <div>Found {this.props.requestCount} requests.</div>
          </Layout>
        );
      }
    }
export default RequestIndex;