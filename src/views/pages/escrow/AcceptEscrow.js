import { parseJSON } from 'jquery'
import React, { useEffect, useState } from 'react'
import { X } from 'react-feather'
import {Col, Input, Button } from 'reactstrap'
import Label from 'reactstrap/lib/Label'
import Modal from 'reactstrap/lib/Modal'
import ModalHeader from 'reactstrap/lib/ModalHeader'
import Row  from 'reactstrap/lib/Row'
import Table from 'reactstrap/lib/Table'
import CompanyTable from '../../dashboard/ecommerce/CompanyTable'
import CurrencyMap from '../../excroUiElements/CurrencyMap'
import WalletAddress from './WalletAddres'

function AcceptEscrow() {
    const [codeRequired, setcodeRequired] = useState(false)
    const [broker, setbroker] = useState(false)
    const [getDetails, setgetDetails] = useState(false)
    const [modal, setmodal] = useState(false)
    const [uniquecode, setuniquecode] = useState("")
    const [data, setdata] = useState()
    const handleToggle = () => {
        setmodal(!modal)
    }
    useEffect(() => {
        window.location.pathname === "/acceptescrow" ? setcodeRequired(true) : setcodeRequired(false)
         return () => {
        }
    }, [])
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleToggle} />
    const renderData = () => {

    }
    function acceptOrder () {
        const seller = {
            seller : `${parseJSON(localStorage.getItem('userData'))["uid"]}`
        }
        if (data.buyer && data.seller) {
            if (data.buyer !== parseJSON(localStorage.getItem("userData"))["uid"] && data.seller !== parseJSON(localStorage.getItem("userData"))["uid"]) {
                fetch(`http://127.0.0.1:5000/order/${uniquecode}`, {
                    method:"POST",
                    headers:{
                      'Content-Type': 'application/json',
                      'x-access-token' : `${localStorage.getItem('token')}`
                    },
                    body:JSON.stringify(seller)
                  }).then(resp => resp.json()).then(resp => console.log(resp))
            }
        }
    }
    const getEscrowDetails = () => {
        fetch(`http://127.0.0.1:5000/order/${uniquecode}`, {
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'x-access-token' : `${localStorage.getItem('token')}`
        }
      }).then(resp => resp.json()).then(resp => {
        setdata(resp.result)
        setgetDetails(true)
        setcodeRequired(false)
      })
    }
    return (
        <div className="card" style={{paddingBottom:"200px", marginTop:"30px"}}>
            <Row>
                <Col xl="2" xs="0" md="2"></Col>
                <Col xl="8" xs="12" md="13">
             
            <div >
                {codeRequired && 
                    
                    <Col xl="12" md="12" xs="12" style={{border:"1px solid skyblue", padding:"20px", marginTop:"70px", borderRadius:"20px"}}>
                        <Label style={{fontSize:"18px"}}>
                        <b>
                            Enter Escrow Code
                        </b>
                        </Label>
                        <WalletAddress label=" " walletAddress={uniquecode} setwalletAddress={(e) => setuniquecode(e)} />
                        <div >
                        <Button color="primary" onClick={() => { getEscrowDetails() }} outline style={{marginTop:"20px", padding:"10px", fontSize:"18px"}}>Get Details</Button>
                        </div>
                    </Col>
                }
            </div>  
            <div>
                {
                    getDetails && data && 
                       
                        <Col xl="12" md="12" xs="12" style={{textAlign:'center', paddingTop:"70px"}}>
                        <Table responsive>
                        <thead>
                        <tr>
                            <th>Escrow Code</th>
                            <th>{data.uniqueCode}</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>Currency</div>
                                </div>
                            </td>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>{data.currency}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>Quantity</div>
                                </div>
                            </td>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>{data.quantity}{data.currency}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>Price Per Crypto</div>
                                </div>
                            </td>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>{CurrencyMap[parseJSON(data.metaData)["fiatCurrency"]].symbol}{data.demandPrice}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>Total Price</div>
                                </div>
                            </td>
                            <td style={{padding:"20px"}}>
                                <div>
                                    <div className='font-weight-bolder'>{CurrencyMap[parseJSON(data.metaData)["fiatCurrency"]].symbol}{data.totalPrice}</div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    </Col>
                    
                }
            </div>  
            <Modal isOpen={modal} toggle={handleToggle}>
            <ModalHeader className='mb-1' toggle={handleToggle} close={CloseBtn} tag='div'></ModalHeader>
            </Modal>
            <div>
            {getDetails && <div style={{marginTop:"20px", float:"right"}}>
                <Button.Ripple onClick={() => acceptOrder()} className={data.buyer === parseJSON(localStorage.getItem("userData"))["uid"] ? "disabled" : ""} color="primary">Accept</Button.Ripple>
            </div>}
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default AcceptEscrow
