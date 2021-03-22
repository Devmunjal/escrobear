import React, { useEffect, useState } from 'react'
import ButtonDropdown from 'reactstrap/lib/ButtonDropdown'
import Col from 'reactstrap/lib/Col'
import DropdownItem from 'reactstrap/lib/DropdownItem'
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import Input from 'reactstrap/lib/Input'
import Label from 'reactstrap/lib/Label'
import Row from 'reactstrap/lib/Row'
import CurrencyMap from '../../excroUiElements/CurrencyMap'
import WalletAddress from './WalletAddres'

function PaymentDetails(props) {
    const [broker, setbroker] = useState(false)
    const [selectedFiat, setselectedFiat] = useState("USD")
    const [feillds, setfeillds] = useState([])
    const [openDropDown, setopenDropDown] = useState(false)
    const toggleDropdown = () => {
        setopenDropDown(!openDropDown)
    }
    const [bankDetails, setbankDetails] = useState({
        EUR:{
            Name:"",
            "SWIFT/BIC Code":"",
            "IBAN/Account Number":""
        }, 
        INR:{
            Name:"Name",
            "IFSC Code":"IFSC Code",
            "Account Number":"Account Number"
        },
        USD:{
            Name:"",
            "SWIFT/BIC Code":"",
            "IBAN/Account Number":"",
            "Routing Number":"",
            "Account Type":"checkbox"
        },
        CNY:{
            Name:"",
            "Card Number":""
        }

    })
    function getFeilds (cur) {
        const array = []
        for (const key in bankDetails[`${cur}`]) {
            console.log(key)
            array.push(key)
        }
        setfeillds(array)
    }
    useEffect(() => {
        getFeilds(selectedFiat)
        return () => {
            
        }
    }, [selectedFiat])
    return (
        <div>
        <div style={{marginTop:"40px", borderRadius:"20px", border:"1px solid skyblue", padding:"20px"}}>
            <Row>
                {props.buyer && <Col xl="12" xs="12" md="12">
                    <WalletAddress {...props} />
                    <div style={{marginTop:"20px", float:"left", alignItems:"left", marginLeft:"20px"}}>
                     <Input style={{float:"left", alignItems:"left"}} onChange={() => setbroker(!broker)} type="checkbox"  />
                     <span ><b style={{fontSize:"18px"}}>Does this Escrow includes Broker</b></span>
                    </div>
                </Col>}
                {
                    !props.buyer && 
                    <Col xl="12" md="12" xs="12">
                    <ButtonDropdown style={{marginLeft:"20px", marginTop:"10px", fontSize:"22px"}}  isOpen={openDropDown} toggle={toggleDropdown}>
                    <DropdownToggle outline color="primary" caret style={{fontSize:"18px"}} >
                         {`${CurrencyMap[`${selectedFiat}`].symbol} ${selectedFiat}`}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem  style={{fontSize:"18px"}} onClick={(e) => setselectedFiat(e.target.outerText) } tag="span">
                         INR
                        </DropdownItem>
                        <DropdownItem  style={{fontSize:"18px"}} onClick={(e) => setselectedFiat(e.target.outerText)} tag="span">
                         USD
                        </DropdownItem>
                        <DropdownItem  style={{fontSize:"18px"}} onClick={(e) => setselectedFiat(e.target.outerText)} tag="span">
                         EUR
                        </DropdownItem>
                    </DropdownMenu>
                    </ButtonDropdown>
                    </Col>
                }
                {
                   feillds && feillds.length > 0 && !props.buyer && 
                        
                        feillds && feillds.length > 0 && feillds.map((data) => {
                           return (
                               <Col xl="12" md="12" xs="12" style={{marginTop:"10px"}}>
                                <Label style={{fontSize:"16px"}}><b>{data}</b></Label>
                                <Input type="text" style={{paddingTop:"25px", paddingBottom:"25px"}}/>
                               </Col>
                            )
                        })
                        
                }
               {!props.buyer &&  <div style={{marginLeft:"20px", marginTop:"10px"}}>
                 <Input style={{float:"left", alignItems:"left"}} onChange={() => setbroker(!broker)} type="checkbox"  />
                     <span ><b style={{fontSize:"18px"}}>Does this Escrow includes Broker</b></span>
                    </div>}
            </Row>
            {
                    broker &&
                    
                    <Col style={{marginTop:"30px"}}>
                   <Row style={{marginBottom:"20px"}}>
                       <Col xl="6" md="6" xs="12" style={{padding:"20px"}}>
                       <Label style={{fontSize:"16px"}}><b>Name</b></Label>
                       <Input type="text" style={{paddingTop:"25px", paddingBottom:"25px"}}/>
                       </Col>
                       <Col xl="6" md="6" xs="12" style={{padding:"20px"}}>
                       <Label style={{fontSize:"16px"}}><b>Email</b></Label>
                       <Input type="text" style={{paddingTop:"25px", paddingBottom:"25px"}}/>
                       </Col>
                   </Row>
                   <div style={{marginLeft:"-20px", marginRight:"-20px"}}>
                   <WalletAddress label="Brokers Wallet Address"   />
                   </div>
                    </Col>
                    
                }
            </div>
        </div>
    )
}

export default PaymentDetails
