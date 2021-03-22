import React, {useEffect, useState} from 'react'
import Chart from 'chart.js'
import './Charts.css'

function Charts(props) {
    const [currentPrice, setcurrentPrice] = useState("")
    const [PreviousPrice, setPreviousPrice] = useState("")
    const [colorForGraph, setcolorForGraph] = useState("")
    const btcData = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${props.currency}&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`)
      const json = await response.json()
      const data = json.Data.Data
      const times = data.map(obj => obj.time)
      const prices = data.map(obj => obj.high)
      return {
        times,
        prices
      }
    }
    function checkStatus(response) {
      if (response.ok) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }
    async function printBtcChart(PreviousPrice, currentPrice) {
      const { times, prices } = await btcData()
      //console.log(document.getElementById('btcChart'))
     

      if (document.getElementById('btcChart')) {
      const btcChart = document.getElementById('btcChart') ? document.getElementById('btcChart').getContext('2d') : ""
    
      const gradient =  btcChart.createLinearGradient(0, 0, 0, 400) 
    
      gradient.addColorStop(0,  `${PreviousPrice > currentPrice ? "#ea4335" : "#17e84f"}`)
      gradient.addColorStop(.425,  `${PreviousPrice > currentPrice ? "#ea4335" : "#17e84f"}`)
    
      Chart.defaults.global.defaultFontFamily = 'Red Hat Text'
      Chart.defaults.global.defaultFontSize = 12
    
      new Chart(btcChart, {
        type: 'line',
        data: {
          labels: times,
          datasets: [
            {
          label: '$',
            data: prices,
            // backgroundColor: `${ PreviousPrice > currentPrice ? "#ea4335" : "#17e84f"}`,
            backgroundColor:"#ff000000",
            borderColor: `${ PreviousPrice > currentPrice ? "#ea4335" : "#17e84f"}`,
            borderJoinStyle: 'round',
            borderCapStyle: 'round',
            borderWidth: 3,
            pointRadius: 0,
            pointHitRadius: 10,
            lineTension: .2
          }
        ]
        },
    
        options: {
          title: {
            display: false,
            text: 'Heckin Chart!',
            fontSize: 35
          },
    
          legend: {
            display: false
          },
    
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
    
          scales: {
            xAxes: [
              {
              display: false,
              gridLines: {}
            }
          ],
            yAxes: [
              {
              display: false,
              gridLines: {}
            }
          ]
          },
    
          tooltips: {
            callbacks: {
              //This removes the tooltip title
              title: () => {}
           },
            //this removes legend color
            displayColors: false,
            yPadding: 10,
            xPadding: 10,
            position: 'nearest',
            caretSize: 10,
            backgroundColor:"#ff000000",
            bodyFontSize: 15,
            bodyFontColor: '#303030' 
          }
        }
      })
    }
    }
    async function updateBitcoinPrice() {
      const { times, prices } = await btcData()
      const currentPricelocal = prices[prices.length - 1].toFixed(2)
      setcurrentPrice(parseInt(currentPricelocal))
      setPreviousPrice((prices[prices.length - 2]))
      console.log(parseInt(currentPricelocal), "current")
      console.log((prices[prices.length - 2]))
      printBtcChart((prices[prices.length - 2]), parseInt(currentPricelocal))
    }
    
    useEffect(() => {
      updateBitcoinPrice()

      setInterval(() => {
        updateBitcoinPrice()
      }, 60000)
        return () => {
            
        }
    }, [])
    
    return (
        <div style={{ width:"100%"}}>
             <div  style={{width: "100%", height:"100%" }} className="btc-chart card">
            {props.title && <div  className="asset-info-chart chart-main-div">
              <div className="title-chart">
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" width="15%" /> 
                    <h1 className="h1-chart" style={{fontWeight:"bold"}}>Bitcoin</h1>
                </div>
                <div className="details-chart">
                    <h2 className="asset-price-chart" id="btcPrice" style={{
                        color: `${ PreviousPrice > currentPrice ? "#ea4335" : "#17e84f"}`

                    }}>${currentPrice} 
                    {/* <p className="subtitle">{currentPrice < PreviousPrice ? `Low By ${Math.round(PreviousPrice - currentPrice)}` : `High By ${Math.round(currentPrice - PreviousPrice)}`}</p> */}
                    </h2>
                </div>
            </div>}
            <canvas style={{ width:"100%"}} id="btcChart"></canvas>
        </div>

        </div>
    )
}

export default Charts
