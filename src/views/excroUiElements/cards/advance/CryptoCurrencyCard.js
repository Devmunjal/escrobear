import { Card, CardBody, CardText, Button, Row, Col } from "reactstrap"
import medal from "@src/assets/images/illustration/badge.svg"
import "./CryptoCurrencyCard.css"
import {useState } from 'react'
import bitcoin from "../../../../assets/images/logo/bitcoin.png"
import ether from "../../../../assets/images/logo/ethereum.png"
import xrp from "../../../../assets/images/logo/xrp.png"
import usdt from "../../../../assets/images/logo/tether.png"
import Label from "reactstrap/lib/Label"
const CryptoCurrencyCard = (props) => {
    const {clickCurrency, setclickCurrency} = props
  return (
        <Row style={{textAlign:"center"}}>
          <Col style={{cursor:"pointer"}} onClick={() => setclickCurrency('BTC')}>
            {clickCurrency === 'BTC' ? <img
              src={bitcoin}
              className="Bitcoin-Img-selcted"
              style={{
                cursor: "pointer",
                verticalAlign: "center"
              }}
            /> : <img 
                className="Bitcoin-Img-unselcted"
                style={{
                cursor: "pointer",
                verticalAlign: "center"
                }} 
                src={bitcoin}/> }
                <div style={{marginTop:"5px"}}><b>BTC</b></div>
          </Col>
          <Col style={{cursor:"pointer"}} onClick={() => setclickCurrency('ETH')}>
           {clickCurrency === 'ETH' ? <img

              src={ether}
              className="xrp-coin-selcted"
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                verticalAlign: "center"
              }}
            /> : <img  
            style={{
                cursor: "pointer",
                borderRadius: "50%",
                verticalAlign: "center"
              }}
              className="xrp-coin-unselcted" 
              src={ether}

             />}
             <div style={{marginTop:"5px"}}><b>ETH</b></div>
          </Col>
          <Col style={{cursor:"pointer"}} onClick={() => setclickCurrency('XRP')}>
          {clickCurrency === 'XRP' ? <img
              src={xrp}
              className="eth-coin-selcted"
              style={{
                cursor: "pointer",
                borderRadius: "100%",
                verticalAlign: "center"
              }}
            /> : <img 
            src={xrp}

            className="eth-coin-unselcted"
            style={{
              cursor: "pointer",
              borderRadius: "100%",
              verticalAlign: "center"
            }}/>}
            <div style={{marginTop:"5px"}}><b>XRP</b></div>
          </Col>
          <Col style={{cursor:"pointer"}} onClick={() => setclickCurrency('USDT')}>
          {clickCurrency === 'USDT' ? <img
              src={usdt}
              className="eth-coin-selcted"
              style={{
                cursor: "pointer",
                borderRadius: "100%",
                verticalAlign: "center"
              }}
            /> : <img 
            src={usdt}

            className="eth-coin-unselcted"
            style={{
              cursor: "pointer",
              borderRadius: "100%",
              verticalAlign: "center"
            }}/>}
            <div style={{marginTop:"5px"}}><b>USDT</b></div>
          </Col>
        </Row>
  )
}

export default CryptoCurrencyCard
