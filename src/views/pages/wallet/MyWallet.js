import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Clipboard, PlusCircle } from 'react-feather'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import {Table, Input} from 'reactstrap'
import WalletAddress from '../escrow/WalletAddres'

function MyWallet() {
    return (
        <div className="card" style={{paddingBottom:"200px", textAlign:"center"}}>
            <Row>
                <Col xl="2"></Col>
                <Col xl="8" md="12" xs="12">
                <h1 style={{marginTop:"30px"}}><b>My Wallets</b></h1>
                <div style={{marginTop:"20px", borderRadius:"20px", border:"1px solid skyblue", paddingTop:"10px", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"40px"}}>
                <div style={{marginTop:"30px"}}>
                    <WalletAddress label="BTC" />
                </div>
                <div style={{marginTop:"30px"}} >
                    <WalletAddress label="ETH" />
                </div>   
                <div style={{marginTop:"30px"}}>
                    <WalletAddress label="UDTH" />
                </div>
                <div style={{marginTop:"30px"}} >
                    <WalletAddress label="XRP" />
                </div>
                </div>
                </Col>
                <Col xl="3" md="3"></Col>
            
            </Row>
        </div>
    )
}

export default MyWallet
