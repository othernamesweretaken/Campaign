pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public contracts;
    
    function createCampaign(uint minimumAmount) public {
    contracts.push(new Campaign(minimumAmount, msg.sender));
}
function getDeployedContract() public view returns(address[]){
    return contracts;
}
}

contract Campaign {
    
    function Campaign(uint minimumAmount, address creator) public {
        manager = creator;
        minimumContribution= minimumAmount;
    }
    
     ///Defining struct is like new type definition we create.
    struct Request {
            string description;
            uint value;
            address recipient;
            bool complete;
            mapping(address=>bool) approvals;
            uint approversCount;    
        }
    
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint public totalApprovers=0;

    // like address[] :- array of type request.
    Request[] public allRequests;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    

    
    function contribute() public payable{
        require(msg.value>minimumContribution);
        if(!approvers[msg.sender]){
        approvers[msg.sender] = true;
        totalApprovers++;
        }
    }
    
    function createRequest(string description, uint value, address recipient) public restricted{
            Request memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approversCount: 0
            });
            allRequests.push(newRequest);
            
    }   
    
    function approveRequest(uint index) public{
        
        Request storage request = allRequests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approversCount++;
        
        
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = allRequests[index];
        require(request.approversCount > (totalApprovers/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }

    function getContractSummary() public view returns(uint, uint, uint,uint, address){
        return(
            minimumContribution,
            allRequests.length,
            this.balance,
            totalApprovers,
            manager
        );
    }

    function getRequestCount() public view returns(uint){
        return allRequests.length;
    }
}