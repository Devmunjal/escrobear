import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import { HelpCircle } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
function StatusCard(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
    //   axios.get('/card/card-analytics/goal-overview').then(res => setData(res.data))
    }, [])
    const options = {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: ['#51e5a8'],
        plotOptions: {
          radialBar: {
            offsetY: 10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '65%'
            },
            track: {
              background: '#ebe9f1',
              strokeWidth: '50%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: '#5e5873',
                fontFamily: 'Montserrat',
                fontSize: '2rem',
                fontWeight: '300'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [props.success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 20
          }
        }
      },
      series = [props.data]
  
    return  (
        <div style={{backgroundColor:"#f8f8f8"}} >
        <Card style={{backgroundColor:"#f8f8f8"}} className='p-0'>
            <Chart options={options} series={series} type='radialBar' height={140} />
        </Card>
        </div>
    ) 
}

export default StatusCard
