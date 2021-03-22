import React, {useState} from "react"
import "./Calculator.css"
import backBtn from "../../../assets/images/icons/delete.png"
import Label from "reactstrap/lib/Label"
import Input from "reactstrap/lib/Input"
import Row from "reactstrap/lib/Row"
import Col from "reactstrap/lib/Col"
import btc from '../../../assets/images/logo/bitcoin.png'

function Calculator(props) {
  const [value, setvalue] = useState()
  const [Btc, setBtc] = useState(true)
  const [Fiat, setFiat] = useState(false)
  const [valueBTC, setvalueBTC] = useState("")
  const [valueFiat, setvalueFiat] = useState("")
    const [EnteredVale, setEnteredVale] = useState('')
    function calcNumbers(x) {
       const data = EnteredVale + x
        setEnteredVale(data)        
    }
  return (
    <div  className="wrapper-calculator" >
      <div className="row-wrapper" >
        <img className="img-wrapper" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
        <div className="box-wrapper">
          <p className="text1-wrapper">
            {props.currency}
          </p>
          <p className="text2-wrapper">
            {props.currency === "BTC" ? "BITCOIN" : props.currency === "ETH" ? "Ether" : props.currency === "XRP" ? "Ripple" : props.currency === "USDT" ? "USDT" : ""   }
          </p>
        </div>
        <div className="input-wrapper">
        <input onFocus={() => { setvalueFiat(0); setvalue(0); setBtc(true); setFiat(false) }} onChange={(e) => { setvalue(parseInt(e.target.value) * 40000); setvalueBTC(e.target.value) }} type="text" value={Fiat ? value : valueBTC} pattern="/^-?d+.?d*$/" maxlength="8" class="input-calculator" />
        </div>
      </div>
      <div className="row-wrapper" style={{background:"#f8f8f8"}}>
      <img className="img-wrapper" src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" />
        <div className="box-wrapper">
          <p className="text1-wrapper">
            USD
          </p>
          <p className="text2-wrapper">
            United State Dollar
          </p>
        </div>
        <div className="input-wrapper">
        <input onFocus={() => { setvalueBTC(0); setvalue(0); setBtc(false); setFiat(true) }} value={Btc ? value : valueFiat} onChange={(e) => { setvalue(parseInt(e.target.value) / 40000); setvalueFiat(e.target.value) }} type="text"  pattern="/^-?d+.?d*$/" maxlength="8" class="input-calculator" />
        </div>
      </div>
    </div>
  )
}

export default Calculator
