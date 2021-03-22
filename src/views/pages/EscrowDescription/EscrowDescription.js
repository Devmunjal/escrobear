import React, { useEffect, useState } from 'react'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import CardImg from 'reactstrap/lib/CardImg'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import Table from 'reactstrap/lib/Table'
import QRCode from 'qrcode.react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Clipboard } from 'react-feather'
import CurrencyMap from '../../excroUiElements/CurrencyMap'
import { parseJSON } from 'jquery'

function EscrowDescription() {
    const [bear, setbear] = useState(true)
    const [Id, setId] = useState("")
    const [orderData, setorderData] = useState("")
    useEffect(() => {
        const id = window.location.pathname.split("/")
        setId(id[2])
        fetch(`http://127.0.0.1:5000/order/${id[2]}`, {
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'x-access-token' : `${localStorage.getItem('token')}`
        }
      }).then(resp => resp.json()).then(resp => setorderData(resp.result))
        return () => {
            
        }
    }, [])
    return (
        <div>
            <Row>
                <Col xl="8" md="12" xs="12" style={{textAlign:"center"}}>
                {orderData && <Table hover>
                    <thead>
                        <tr>
                        <th>Escrow Code</th>
                        <th>{orderData.uniqueCode}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <th scope="row">Created By</th>
                        <td>Name</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Created Date</th>
                        <td>22/03/2021</td>
                        
                        </tr> */}
                        <tr>
                        <th scope="row">Currency</th>
                        <td>{orderData.currency}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Price</th>
                        <td>{CurrencyMap[parseJSON(orderData.metaData)["fiatCurrency"]].symbol}{orderData.demandPrice}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Quantity</th>
                        <td>{orderData.quantity} {orderData.currency}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Total Amount</th>
                        <td>{CurrencyMap[parseJSON(orderData.metaData)["fiatCurrency"]].symbol}{orderData.totalPrice}</td>
                        </tr>
                        <tr>
                        <th scope="row">Wallet Address</th>
                        <td>{parseJSON(orderData.metaData)["walletAddress"]}</td>
                        </tr>
                        {/* <tr>
                        <th scope="row">Bank Details</th>
                        <td>
                            <div>
                                Account No .
                            </div>
                            <div>
                                IFCE Code
                            </div>
                        </td>
                        </tr> */}
                        <tr>
                        <th scope="row">Broker</th>
                        <td>Yes</td>
                        </tr>
                        <tr>
                        <th scope="row">Broker Details</th>
                        <td>
                            <div>
                                Name:
                            </div>
                            <div>
                                Email
                            </div>
                            <div>
                                Wallet Address
                            </div>
                            {/* <div>
                                Bank Account
                            </div>
                            <div>
                                IFSC Code
                            </div> */}
                        </td>
                        </tr>
                        <tr>
                        {/* <th scope="row">Accepted By</th>
                        <td>User Name</td>
                        </tr>
                        <tr>
                        <th scope="row">Accepted Date</th>
                        <td>22/03/2021</td> */}
                        
                        </tr>
                        {/* <tr>
                        <th scope="row">Wallet Address</th>
                        <td>87236472349879834</td>
                        
                        </tr> */}
                        {/* <tr>
                        <th scope="row">Bank Details</th>
                        <td><div>
                            Account No
                            </div>
                            <div>
                                IFCE Code
                            </div>
                            </td>
                        
                        </tr> */}
                        <tr>
                        <th scope="row">Status</th>
                        <td>{orderData.status}</td>
                        
                        </tr>
                    </tbody>
                    </Table>}
                </Col>
                <Col xl="4" md="12" xs="12" style={{textAlign:"center", marginTop:"20px"}}>
                    <h1>
                        Actions
                    </h1>
                    {bear && <CardImg src="https://media1.tenor.com/images/7c618cd7157e94bc4d5761eff7ddff7c/tenor.gif?itemid=15319463" />}  
                    {
                        !bear && <Card style={{border:"1px solid skyblue", borderRadius:"20px", padding:"10px"}}>
                            <h3 style={{marginTop:"20px"}}>
                                You have to pay Crypto to Wallet Address Given below
                            </h3>
                            <CardBody style={{fontSize:"18px"}}>
                               <b>Wallet Address : </b>  <CopyToClipboard onCopy={() => console.log("hii")} text={"36428634823748923"}> 
                               <span>
                                   876347729834908 <Clipboard size={18} style={{cursor:"pointer"}} />
                               </span>
                            </CopyToClipboard>
                            </CardBody>
                            <div style={{marginTop:"20px", marginBottom:"20px"}}><QRCode value = "" /></div>
                            <small style={{marginBottom:"10px"}}>
                                you can pay by copy this wallet address or by scan this qr code
                            </small>
                        </Card>
                    }     
                    {
                        !bear && <Card style={{border:"1px solid skyblue", borderRadius:"20px", padding:"10px"}}>
                            <h3 style={{marginTop:"20px"}}>
                                You have to pay Money to Bank Account Given below
                            </h3>
                            <CardBody style={{fontSize:"18px"}}>
                               <b>Bank Account No.:</b>  <CopyToClipboard onCopy={() => console.log("hii")} text={"36428634823748923"}> 
                               <span>
                                   876347729834908 <Clipboard size={18} style={{cursor:"pointer"}} />
                               </span>
                            </CopyToClipboard>
                            </CardBody>
                            {/* <div style={{marginTop:"20px", marginBottom:"20px"}}><QRCode value = "" /></div> */}
                            {/* <small style={{marginBottom:"10px"}}>
                                you can pay by copy this wallet address or by scan this qr code
                            </small> */}
                        </Card>
                    }    
                </Col>
            </Row>
        </div>
    )
}

export default EscrowDescription
