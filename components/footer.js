
import React from 'react';
import {Menu} from 'semantic-ui-react';
export default () =>{
    return(
        <div style={{bottom:"0", left:"10"}}>
 
        <div style={{position:"fixed",bottom:"0",paddingBottom:"20px"}}>
        <hr/>
        <Menu >

        <a className="item"> &copy; Created by - Jainil Vora </a>
        
        <Menu.Menu position="right" style={{whiteSpace: 'pre-wrap',overflow:'auto'}}>
       <a className="item" > Ethereum & Solidity - A Complete Developer's Guide</a>
        </Menu.Menu>
       
        </Menu>
    </div>
    </div>
    );
}