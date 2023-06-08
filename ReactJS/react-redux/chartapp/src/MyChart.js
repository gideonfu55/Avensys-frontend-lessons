import React, { useState } from 'react'
import { Bar, Bubble, Doughnut, Line, Scatter } from 'react-chartjs-2'
import { worldCovidData } from './coviddata'
import { Chart } from 'chart.js/auto'

function MyChart() {

  const [ chartData, setChartData ] = useState({
    labels: worldCovidData.map(data => {
      return data.year
    }),
    datasets: [
      { 
        label: "Covid Cases", 
        data: worldCovidData.map(data => {
          return data.covidCases
        }),
        backgroundColor: ['green', 'blue', 'orange']
      }
    ]
  })

  return (
    <div className="m-3">
      <h5 className='fw-bold'>MyChart</h5>
      <div className='d-flex' style={{width: 300, height: 250}}>
        <Bar data={chartData} />
        <Doughnut data={chartData} />
        <Line data={chartData} />
        <Scatter data={chartData} />
        <Bubble data={chartData} />
      </div>
    </div>
  )
}

export default MyChart