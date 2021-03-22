import React from 'react'
import { ChevronsUp } from 'react-feather'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import Calculator from '../../excroUiElements/Calculator/Calculator'
import Charts from '../../excroUiElements/charts/Charts'

function ExtendedRow(props) {
    return (
        <Row >
            <Col xl="6" md="6" xs="12" style={{marginTop:"50px"}}>
                <img src={props.img} style={{width:"50px", display:"inline"}} />
                <b style={{fontSize:"38px", verticalAlign:"middle", marginLeft:"10px"}}>
                    Bitcoin
                </b>
                <small style={{background:"#f8f8f8", padding:"4px", borderRadius:"3px", fontSize:"18px", verticalAlign:"center"}}>
                    BTC
                </small>
            </Col>
            <Col xl="6" md="6" xs="12" style={{marginTop:"50px"}}>
                <small>
                    Bitcoin Price(BTC)
                </small>
                <br></br>
                <b style={{fontSize:"30px"}}>
                    $59,751 <span style={{background:"green", color:"white", padding:"4px", borderRadius:"10px", marginLeft:"10px", fontSize:"20px"}}>
                        <ChevronsUp size={20} /> 9.63%
                    </span>
                </b>
                <div>
                    <small>33.25 ETH </small><small style={{color:"green"}}><ChevronsUp size={10}/>5.79%</small>
                </div>
            </Col>
            <Col xl="8" xs="12" md="8">
                <Charts  title={false} currency={props.currency}/>
            </Col>
            <Col xl="4" xs="12" md="8" style={{marginTop:"20px", paddingLeft:"20px"}}>
                <Calculator currency={props.currency} />
            </Col>
        </Row>
    )
}

export default ExtendedRow
