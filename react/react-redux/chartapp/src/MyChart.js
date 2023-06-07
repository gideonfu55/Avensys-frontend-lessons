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
    <div>
      <h5>MyChart</h5>
      <div style={{width: 500, height: 500}}>
        <Bar data={chartData} />
        <Scatter data={chartData} />
        <Bubble data={chartData} />
        <Doughnut data={chartData} />
        <Line data={chartData} />
      </div>
    </div>
  )
}

export default MyChart