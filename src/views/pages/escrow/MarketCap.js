import React, { useState } from 'react'
import Table from 'reactstrap/lib/Table'
import btc from '../../../assets/images/logo/bitcoin.png'
import eth from '../../../assets/images/logo/ethereum.png'
import xrp from '../../../assets/images/logo/xrp.png'
import udth from '../../../assets/images/logo/tether.png'
import { ArrowUp, ChevronsDown, ChevronsUp, Star } from 'react-feather'
import ExtendedRow from './ExtendedRow'
import Charts from '../../excroUiElements/charts/Charts'

 function MarketCap() {
     const [Bitcoin, setBitcoin] = useState(false)
     const [Ether, setEther] = useState(false)
     const [XRP, setXRP] = useState(false)
     const [USDT, setUSDT] = useState(false)
    return (
        <div  style={{ margin:"100%", padding: "0", height: "100%", overflow: "hidden"}}>
            {/* <Table responsive>
                <thead>
                    <th>

                    </th>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        24h%
                    </th>
                    <th>
                        7d%
                    </th>
                    <th>
                        Market Cap
                    </th>
                    <th>
                        Circulating Supply
                    </th>
                    <th>
                        Last 7 Days
                    </th>
                </thead>
                <tbody>
                    <tr onClick={() => setBitcoin(!Bitcoin)} style={{marginTop:"40px", cursor:"pointer"}}>
                        <td style={{paddingTop:"40px"}}>
                            <Star size={20} style={{verticalAlign:"middle"}} />
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            1
                        </td>
                        <td style={{paddingTop:"40px"}}>
                           <img src={btc} width="20px" /> <b style={{fontSize:"18px", verticalAlign:"middle"}}>Bitcoin</b> <small style={{verticalAlign:"middle", fontSize:"18px"}}>BTC</small>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$57,983.75</b>
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 5.06%
                        </td>
                        <td style={{color:"red", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsDown size={20} style={{verticalAlign:"middle"}}/> 2.60%
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$1,019,030,671,531</b>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                         <b>18,657,175 BTC</b>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <Charts title={false} />
                        </td>
                    </tr>
                    <tr onClick={() => setEther(!Ether)} style={{cursor:"pointer"}}>
                        <td style={{paddingTop:"40px"}}>
                            <Star size={20} style={{verticalAlign:"middle"}} />
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            2
                        </td>
                        <td style={{paddingTop:"40px"}}>
                           <img src={eth} width="20px" /> <b style={{fontSize:"18px", verticalAlign:"middle"}}>Ethereum</b> <small style={{verticalAlign:"middle", fontSize:"18px"}}>ETH</small>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$1,793.75</b>
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 1.16%
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 0.67%
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$205,030,671,531</b>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                         <b>115,657,175 ETH</b>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr onClick={() => setXRP(!XRP)} style={{cursor:"pointer"}}>
                        <td style={{paddingTop:"40px"}}>
                            <Star size={20} style={{verticalAlign:"middle"}} />
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            3
                        </td>
                        <td style={{paddingTop:"40px"}}>
                           <img src={xrp} width="20px" /> <b style={{fontSize:"18px", verticalAlign:"middle"}}>XRP</b> <small style={{verticalAlign:"middle", fontSize:"18px"}}>XRP</small>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$0.48</b>
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 2.88%
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 2.27%
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$105,030,671,531</b>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                         <b>45,115,657,175 XRP</b>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr onClick={() => setUSDT(!USDT)} style={{cursor:"pointer"}}>
                        <td style={{paddingTop:"40px"}}>
                            <Star size={20} style={{verticalAlign:"middle"}} />
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            4
                        </td>
                        <td style={{paddingTop:"40px"}}>
                           <img src={udth} width="20px" /> <b style={{fontSize:"18px", verticalAlign:"middle"}}>Tether</b> <small style={{verticalAlign:"middle", fontSize:"18px"}}>USDT</small>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$1.75</b>
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 0.12%
                        </td>
                        <td style={{color:"#16c784", verticalAlign:"middle", paddingTop:"40px"}}>
                            <ChevronsUp size={20} style={{verticalAlign:"middle"}}/> 0.03%
                        </td>
                        <td style={{paddingTop:"40px"}}>
                            <b>$11,030,671,531</b>
                        </td>
                        <td style={{paddingTop:"40px"}}>
                         <b>38,115,657,175 USDT</b>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </Table> */}
             <div style={{position:"absolute", left: 0, right: 0, bottom: 0, top: "100px"}} >
                <iframe width="100%" height="100%" frameborder="0" src="https://coinmarketcap.com/charts" ></iframe>
            </div>
            <div className="divder" style={{border:"0.8px solid #f8f8f8"}}></div>
            {
                Bitcoin && <ExtendedRow img={btc}  />
            }
        </div>
    )
}

export default MarketCap
