import { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import CompanyTable from './CompanyTable'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import CryptoCurrencyCard from '../../excroUiElements/cards/advance/CryptoCurrencyCard'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import GraphOfCryptoCurrency from '../../excroUiElements/cards/analytics/GraphOfCryptoCurrency'
import Calculator from '../../excroUiElements/Calculator/Calculator'
import Charts from '../../excroUiElements/charts/Charts'
import StatusCard from '../../excroUiElements/cards/advance/statusCard'
import Label from 'reactstrap/lib/Label'
import Table from 'reactstrap/lib/Table'
import Modal from 'reactstrap/lib/Modal'
import { X } from 'react-feather'
import Kyc1 from '../../pages/authentication/Kyc1'
import ModalHeader from 'reactstrap/lib/ModalHeader'
import Kyc2 from '../../pages/authentication/Kyc2'
import MarketCapTable from '../../pages/escrow/marketCapTable'
import pdf from '../../../assets/images/CRYPTOASSETS CONSENT DECLARATION.pdf'
import ModalBody from 'reactstrap/lib/ModalBody'
import { parseJSON } from 'jquery'
import CurrencyMap from '../../excroUiElements/CurrencyMap'

const ExcroBearDashboard = () => {
  const [kyc, setkyc] = useState(false)
  const [step, setstep] = useState("1")
  const [ordersData, setordersData] = useState()
  const handlekyc = () => {
    setkyc(!kyc)
  }
  // const getUser = (id) => {
   
  //   fetch(`http://127.0.0.1:5000/oneuser/${id}`, {
  //     method:"GET",
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(resp => resp.json()).then(resp => { 
  //     console.log(resp)
  //   })
  // }
  function getallOrders () {
    fetch('http://127.0.0.1:5000/all_orders', {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'x-access-token' : `${localStorage.getItem('token')}`
        }
      }).then(resp => resp.json()).then(resp => setordersData(resp.result))
  }
  function updateuser() {
    const agree = {
      isAgreed : true
    }
    fetch('http://127.0.0.1:5000/user', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'x-access-token' : `${localStorage.getItem('token')}`
      },
      body:JSON.stringify(agree)
    }).then(resp => resp.json()).then(resp => {
      console.log(resp, "resp")
        if (resp.result) {
          if (resp.result.isAdmin) {
          resp.result.ability =  [
            {
              action: 'manage',
              subject: 'all'
            }
          ]
          ability.update([
            {
              action: 'manage',
              subject: 'all'
            }
          ])
          history.push(getHomeRouteForLoggedInUser('admin'))
        }
        } else {
          resp.result.ability = [
            {
              action: 'read',
              subject: 'ACL'
            },
            {
              action: 'read',
              subject: 'Auth'
            }
          ]
           ability.update([
            {
              action: 'read',
              subject: 'ACL'
            },
            {
              action: 'read',
              subject: 'Auth'
            }
          ])
          history.push(getHomeRouteForLoggedInUser('client'))
        }
        dispatch(handleLogin(resp.result))
      }
      )
  }
  const { colors } = useContext(ThemeColors),
    trackBgColor = '  #e9ecef'
  useEffect(() => {
    setkyc(!parseJSON(localStorage.getItem('userData'))["isAgreed"])
    getallOrders()
    return () => {
      
    }
  }, [])
  return (
    <div id='dashboard-ecommerce' className="card" style={{backgroundColor:"#f8f8f8", padding:"10px"}} >
      <Row>
        {/* <Col className="card" xl="6" md="6" xs="12" style={{padding:"20px"}}>
        <CryptoCurrencyCard />
        </Col> */}
        <Col xl="6" md="6" xs="12">
          <div style={{padding:"80px", backgroundColor:"#f8f8f8"}}></div>
        </Col>
      </Row>
      <div className="divider" style={{border:"0.2px solid #f8f8f8"}}></div>
      <Row>
        <Col xl="12" md="12" xs="12" style={{padding:"10px"}}>
          <Row>
            <Col xl="12" md="12" xs="12" > 
            {/* <Row style={{textAlign:"center"}}> */}
              <MarketCapTable />
            {/* <Col xl="6" md="6" xs="12">
                <Row style={{marginTop:"23px"}}>
                  <Col xl="6" md="6" xs="6" >
                    <h4>
                      Bitcoin BTC
                    </h4>
                  </Col>
                  
                  <Col xl="6" md="6" xs="6">
                      <h4>
                        Price
                      </h4>
                  </Col>
                </Row>
                
                <Row style={{marginTop:"80px", marginBottom:"20px"}}>
                  <Col xl="6" md="6" xs="6" >
                    <h4>
                      24 Volume
                    </h4>
                  </Col>
                  <Col xl="6" md="6" xs="6">
                      <h4>
                        Market Cap
                      </h4>
                  </Col>
                </Row>
            </Col> */}
            {/* {window.screen.width < 900 && <div className="divider" style={{border:"0.4px solid #f8f8f8"}}></div>} */}
              {/* <Col xl="6" md="6" xs="12">
                <Col xl="12" md="12" xs="12">
                    <Charts title={true} />
                </Col>
              </Col> */}
            {/* </Row> */}
            </Col>
            {/* <Col xl="2" md="2" xs="12">
              <Row style={{textAlign:"center"}}>
                <Col style={{marginBottom:"-40px"}} xl="12" md="12" xs="6">
                  
              <StatusCard success={colors.success.main} data={43} />    
              <Label style={{position:"relative", bottom:"40px"}}>Account Status</Label>
                </Col>
                <Col xl="12" md="12"  xs="6">
                  
                <StatusCard success={colors.danger.main} data={55} />  
                <Label style={{position:"relative", bottom:"40px"}}>Escrow Status</Label>
                </Col>
              </Row>
            </Col> */}
          </Row>
          
        {/* <GoalOverview success={colors.success.main} /> */}
        </Col>
        {/* <Col style={{marginTop:"50px"}} xl="2" md="2" xs="12">
          <Calculator  />
        </Col> */}
      </Row>
      <div className="divider" style={{border:"0.2px solid #f8f8f8"}}></div>
      <Row>
        <Col xl="12" md="12" xs="12"><h2 style={{textAlign:"center"}}>My Escrows</h2></Col>
      </Row>
      <div className="divider" style={{border:"0.2px solid #f8f8f8"}}></div>
      <Row>
        {/* <Col xl="12" md="12" xs="12">
          <div style={{textAlign:"center", marginBottom:"20px", overflowX:"scroll"}}>
            <h2 style={{marginTop:"20px", marginBottom:"20px"}}>
              New Escrows
            </h2>
            <Table hover>
              <thead>
                <tr>
                  <th>Escrow Code</th>
                  <th>Created By</th>
                  <th>Created Date</th>
                  <th>Currency</th>
                  <th>Quantity Of Crypto</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>Created</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col xl="12" md="12" xs="12">
          <div style={{textAlign:"center", marginBottom:"20px", overflowX:"scroll"}}>
          <h2 style={{marginTop:"20px", marginBottom:"20px"}}>
              Active Escrows
            </h2>
            <Table hover>
              <thead>
                <tr>
                  <th>Escrow Code</th>
                  <th>Created By</th>
                  <th>Created Date</th>
                  <th>Currency</th>
                  <th>Quantity Of Crypto</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                  <th>Accepted Date</th>
                  <th>Accepted By</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col> */}
        <Col xl="12" md="12" xs="12">
        <div style={{textAlign:"center", marginBottom:"20px", overflowX:"scroll"}}>
          <h2 style={{marginTop:"20px", marginBottom:"20px"}}>
              Escrows
            </h2>
            <Table hover>
              <thead>
                <tr>
                  <th>Escrow Code</th>
                  {/* <th>Owned By</th>
                  <th>Owned Date</th> */}
                  <th>Currency</th>
                  <th>Quantity Of Crypto</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                  {/* <th>Accepted Date</th>
                  <th>Accpted By</th> */}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  ordersData && ordersData.map(data => {
                    return (
                      <tr onClick={() => {  window.location.pathname = `/escrowdescription/${data.uniqueCode}` }}>
                      <th scope="row">{data.uniqueCode}</th>
                      {/* <td>{getUser(data.buyer)}</td>
                      <td>22/03/2020</td> */}
                      <td>{data.currency}</td>
                      <td>{data.quantity} {data.currency}</td>
                      <td>{CurrencyMap[parseJSON(data.metaData)["fiatCurrency"]].symbol}{data.demandPrice}</td>
                      <td>{CurrencyMap[parseJSON(data.metaData)["fiatCurrency"]].symbol}{data.totalPrice}</td>
                      {/* <td>22/03/2021</td>
                      <td>Accpted User name</td> */}
                      <td>{data.status}</td>
                    </tr>
                    )
                  })
                }
                {/* <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr>
                <tr>
                  <th scope="row">1324325343454</th>
                  <td>User Name</td>
                  <td>22/03/2020</td>
                  <td>BTC</td>
                  <td>10</td>
                  <td>$50000</td>
                  <td>$500000</td>
                  <td>22/03/2021</td>
                  <td>Accpted User name</td>
                  <td>Created</td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      {/* <Row className='match-height'>
        <Col className="card" style={{paddingBottom:"20px", backgroundColor:"#f8f8f8"}} xl='6' md='6' xs='12'> */}
          {/* <CardMedal /> */}
          {/* <Row style={{marginTop:"20px", justifyContent:"center"}}>
          <h4 style={{marginLeft:20, marginTop:20}}>Crypto Calculator</h4>

          <Row style={{marginTop:"20px", justifyContent:"center"}}>
          <CryptoCurrencyCard />
          </Row>
          <Row style={{marginTop:"20px"}} className='match-height'>
          <Col style={{alignItems:"center"}} xl="6" md="12" xs ="12">
          <Calculator />
          </Col>
          <Col style={{alignItems:"center"}}  xl="6" md="12" xs ="12">
            <Charts />
          </Col>
          </Row>
        </Col>
        <Col xl='6' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
          <StatsCard cols={{ xl: '3', sm: '6' }} />

        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <GraphOfCryptoCurrency />
            </Col>
            <Col lg='6' md='3' xs='6'>
            
            </Col>
       
          </Row>
        </Col>
       
      </Row>
      <Row style={{marginBottom:"20px"}} className="match-height">
        <Col lg='6' md='12'>
          
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardMeetup />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
      </Row> */}
     <Modal isOpen={kyc}  style={{width:"100%", height:"500px"}}>
            <ModalHeader className='mb-1' toggle={handlekyc}  closeAriaLabel={ <X className='cursor-pointer' size={15} onClick={() => console.log("hii")} />} tag='div'>
              <h1>Complete Your KYC</h1>
            </ModalHeader>
            <ModalBody style={{height:"100%"}}>
              {step === "1" && <div style={{width:"100%", marginBottom:"-80px", marginTop:"-100px"}}><Kyc1  setstep={(a) => setstep(a)} /></div>}
            { step === "2" && <div style={{width:"100%", marginBottom:"-80px", marginTop:"-100px"}}><Kyc2 setstep={(a) => setstep(a)} /></div> }
            { step === "3" && <div>
              <embed src={pdf} style={{width:"100%", height:"470px"}} />
              <input type="checkbox" onChange={() => updateuser()} />
              <span style={{marginLeft:"10px", fontSize:"20px"}}>I agree to terms and conditions</span>
              </div>}
            </ModalBody>
      </Modal>
    </div>
  )
}

export default ExcroBearDashboard
