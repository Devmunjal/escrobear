import React, { useState } from "react"
import {
  Col,
  Row,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label
} from "reactstrap"
import CryptoCurrencyCard from '../../excroUiElements/cards/advance/CryptoCurrencyCard'
import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation-safe'
import WalletAddress from "./WalletAddres"
import PaymentDetails from "./PaymentDetails"
import InputGroup from "reactstrap/lib/InputGroup"
import InputGroupAddon from "reactstrap/lib/InputGroupAddon"
import InputGroupText from "reactstrap/lib/InputGroupText"
import Modal from "reactstrap/lib/Modal"
import ModalHeader from "reactstrap/lib/ModalHeader"
import { Clipboard, X } from "react-feather"
import { parseJSON } from "jquery"
import CopyToClipboard from "react-copy-to-clipboard"
import QRCode from 'qrcode.react'


function CreateEscrow() {
  const [buyer, setbuyer] = useState(false)
  const [step, setstep] = useState("1")
  const [quantity, setquantity] = useState(0)
  const [price, setprice] = useState(0)
  const [openDropDown, setopenDropDown] = useState(false)
  const [clickCurrency, setclickCurrency] = useState("BTC")
  const [selectedTranches, setselectedTranches] = useState("1")
  const [response, setresponse] = useState(false)
  const [amount, setamount] = useState()
  const [bankDetails, setbankDetails] = useState()
  const [brokerDetails, setbrokerDetails] = useState()
  const [walletAddress, setwalletAddress] = useState()
  const [priceInput, setpriceInput] = useState(false)
  const [products, setproducts] = useState()
  const toggleDropdown = () => {
    setopenDropDown(!openDropDown)
  }
  const handleResponseModal = () => {
    window.location.pathname = "/"
    setresponse(!response)
  }
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleResponseModal} />
  const createescrow = () => {
    console.log(typeof (parseJSON(localStorage.getItem("userData")).uid))
    const order = { 
      quantity,
      demandPrice: price,
      currency:clickCurrency,
      totalPrice:amount,
      metaData : JSON.stringify({
        tranches: selectedTranches,
        bankDetails,
        walletAddress,
        fiatCurrency:"USD",
        brokerDetails
      }),
      buyer: `${buyer ? parseJSON(localStorage.getItem("userData")).uid : ""}`,
      seller : `${!buyer ? parseJSON(localStorage.getItem("userData")).uid : ""}`,
      status : "Escrow Created"
    }
    fetch('http://127.0.0.1:5000/order', {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'x-access-token' : `${localStorage.getItem('token')}`
        },
        body:JSON.stringify(order)
      }).then(resp => resp.json()).then(resp => { setproducts(resp); setresponse(true) })
  }
  return (
    <div style={{paddingBottom:"200px", marginTop:"20px", height:"100%"}}>
      { <Row>
        <Col xl="2" md="0" xs="0"></Col>
        <Col xl="8" md="12" xs="12" style={{alignItems:"center", textAlign:"center"}}>
          <h1>Create Escrow</h1>
          <Row style={{alignItems:"center", marginTop:"20px"}}>
            <Col xl="2" ms="1" xs="0"></Col>
            <Col xl="4" ms="4" xs="5">
              <div onClick={() => setstep("1")} style={{textAlign:"center", cursor:"pointer", color:"white", background:`${step === "1" ? "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))" : "linear-gradient(118deg, rgb(51 209 236),rgb(73 154 236 / 70%))"}`, borderRadius:"20px", padding:"10px"}}>
                General Information
              </div>
            </Col>
            <Col xl="1" ms="1" xs="2">
              <div style={{padding:"1px", background:"linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))"}}>

              </div>
            </Col>
            <Col xl="4" ms="4" xs="5">
              <div onClick={() => { if (price && quantity && selectedTranches) { setstep("2") } }} style={{textAlign:"center", cursor:"pointer", color:"white", background:`${step === "2" ? "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))" : "linear-gradient(118deg, rgb(51 209 236),rgb(73 154 236 / 70%))" }`, borderRadius:"20px", padding:"10px"}}>
                Payment Information
              </div>
            </Col>
          </Row>
          {step === "1" && <div>
          <div style={{marginTop:"40px", textAlign:"center", border:"1px solid skyblue", padding:"20px", borderRadius:"20px"}}>
              <Row>
                <Col xs="12" md="12" xl="12" style={{textAlign:"center"}}>
                <Label style={{fontSize:"16px"}}><b>What is the Crypto Currency for this Escrow?</b></Label> 
                  <div style={{marginTop:"20px"}}>
                    <CryptoCurrencyCard setclickCurrency = {(e) => setclickCurrency(e)} clickCurrency = {clickCurrency} />  
                  </div> 
                </Col>
              </Row>
          </div>
          <div style={{marginTop:"40px", textAlign:"center", border:"1px solid skyblue", padding:"20px", borderRadius:"20px"}}>
          <Row>
            <Col xl="3" md="3"></Col>
              <Col xl="6" md="6" xs="12" style={{textAlign:"center"}}>
              <Label style={{fontSize:"16px"}}><b>What is your Role in this Escrow</b></Label> 
                <div style={{marginTop:"20px"}}>
                  <div onClick={() => setbuyer(true)} style={{cursor:"pointer", padding:"10px", fontSize:"17px", paddingRight:"40px", paddingLeft:"40px", borderRadius:"30px 0px 0px 30px", color:"white", background:`${buyer ? "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))" : "linear-gradient(118deg, rgb(51 209 236),rgb(73 154 236 / 70%))"}`, display:"inline"}}>
                   <b>Buyer</b>
                  </div> 
                  <div onClick={() => setbuyer(false)} style={{cursor:"pointer", padding:"10px", fontSize:"17px", paddingRight:"40px", paddingLeft:"40px", borderRadius:"0px 30px 30px 0px", color:"white", background:`${!buyer ? "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))" : "linear-gradient(118deg, rgb(51 209 236),rgb(73 154 236 / 70%))"}`, display:"inline"}}>
                    <b>Seller</b>                   
                   </div> 
                </div> 
              </Col>
            </Row>
            <Row style={{marginTop:"30px"}}>
                <Col xl="6" md="6" xs="12" style={{marginTop:"30px"}}>
                    <Label style={{fontSize:"17px"}}><b>Quantity Of Crypto?</b></Label>
                    <InputGroupAddon style={{fontSize:"25px"}} addonType="prepend">
                    <InputGroupText style={{fontSize:"18px"}}><b>{clickCurrency}</b></InputGroupText>
                    <Input style={{fontSize:"18px"}}  onChange={(e) => setquantity((e.target.value))} type="text" placeholder="How Much You Wanna Deal?" style={{paddingTop:"25px", paddingBottom:"25px", fontSize:"17px"}} />
                    </InputGroupAddon>
                </Col>
                <Col xl="6" md="6" xs="12" style={{marginTop:"30px"}}>
                    <Label style={{fontSize:"17px"}}><b>Price Per Crypto?</b></Label>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{fontSize:"18px"}}><b>$</b></InputGroupText>
                    <Input value={priceInput ? parseInt(amount) / parseInt(quantity) : price} onFocus={() => { setamount(0); setpriceInput(false) }}  onChange={(e) => { setprice((e.target.value)); setamount(parseInt(quantity) * parseInt(price)) }} type="text" placeholder="How Much You Demand For One Crypto" style={{paddingTop:"25px", paddingBottom:"25px", fontSize:"17px"}} />  
                    </InputGroupAddon>
                </Col>
                <Col xl="8" md="8" xs="12" style={{marginTop:"30px"}}>
                    <Label style={{fontSize:"16px"}}><b>Total Amount</b></Label>
                    <InputGroupAddon addonType="prepend">
                     <InputGroupText style={{fontSize:"18px"}}><b>$</b></InputGroupText> 
                      <Input onFocus={() => { setpriceInput(true); setprice(0) }}  value={!priceInput ? parseInt(quantity) * parseInt(price) : amount } onChange={(e) => setamount(e.target.value)}   type="text" placeholder="Total Amount" style={{paddingTop:"25px", paddingBottom:"25px", fontSize:"17px"}} />
                    </InputGroupAddon>
                </Col>
                <Col xl="4" md="4" xs="12" style={{marginTop:"30px"}}>
                <Label style={{fontSize:"16px"}}><b>No. of Tranches</b></Label>
                  <div style={{marginTop:"10px"}}>
                  <ButtonDropdown  isOpen={openDropDown} toggle={toggleDropdown}>
                  <DropdownToggle outline color="primary" caret >
                      {selectedTranches}
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem onClick={(e) => setselectedTranches(e.target.outerText) } tag="span">
                      1
                      </DropdownItem>
                      <DropdownItem onClick={(e) => setselectedTranches(e.target.outerText)} tag="span">
                      2
                      </DropdownItem>
                      <DropdownItem onClick={(e) => setselectedTranches(e.target.outerText)} tag="span">
                      3
                      </DropdownItem>
                  </DropdownMenu>
                  </ButtonDropdown>
                  </div>
                </Col>
            </Row>  
          </div>
          <div style={{marginTop:"30px", float:"right"}}>
            <Button.Ripple color="primary" style={{paddingLeft:"30px", paddingRight:"30px", fontSize:"20px"}} onClick={() => { if (quantity) { setstep("2") }  }}>Next</Button.Ripple>
          </div>
          </div>}
          {
            step === "2" && <div>
             <PaymentDetails  
              buyer={buyer} 
              brokerDetails={brokerDetails} 
              setbrokerDetails={(e) => setbrokerDetails(e)} 
              walletAddress={walletAddress} 
              setwalletAddress={(e) => setwalletAddress(e)}
              bankDetails={bankDetails}
              setbankDetails={(e) => setbankDetails(e)}
             />
             <Row>
               <Col xl="12" md="12" xs="12">
               <div style={{marginTop:"30px", float:"left"}}>
                 <Button.Ripple  style={{paddingLeft:"30px", paddingRight:"30px", fontSize:"20px"}} onClick={() => { setstep("1") }} color="primary">Previous</Button.Ripple>
               </div>
               <div style={{marginTop:"30px", float:"right"}}>
               <Button.Ripple onClick={() => {
                 createescrow()
               }}  style={{paddingLeft:"30px", paddingRight:"30px", fontSize:"20px"}} color="success">Accept</Button.Ripple>
               </div>
               </Col>
             </Row>
            </div>
          }
        </Col>
        <Col xl="2" md="0" xs="0"></Col>
      {products && <Modal isOpen={response} toggle={handleResponseModal}>
      <ModalHeader className='mb-1' toggle={handleResponseModal} close={CloseBtn} tag='div'></ModalHeader>
      <div style={{textAlign:"center", padding:"20px"}}>
          <h1>Escrow Created</h1> 
          <h2>
            You Can Share This Escrow By Copy this Code or by Scanning this QR CODE
          </h2>
      </div>
      <div style={{padding:"20px"}}>
        <Row style={{marginBottom:"10px"}}>
          <Col xl="12" xs="12" md="12" >
          <CopyToClipboard onCopy={() => console.log("hii")} text={products && products.uniqueCode}> 
                  <div style={{fontSize:"20px"}}>
                    {products && products.uniqueCode}
                  <Clipboard size={ window.screen.width < 900 ? 30 : 40}  style={{cursor:"pointer"}}/>
                  </div>
      </CopyToClipboard>
          </Col>
        </Row>
        <Row>
          <Col>
          <QRCode value = {products && products.uniqueCode} />
          </Col>
        </Row>
      </div>
      <div style={{padding:"20px"}}>
        <Button onClick={() => { window.location.pathname = "/" }} color="primary">
          Done
        </Button>
      </div>
      </Modal>}
      </Row>}
    </div>
  )
}

export default CreateEscrow
