import * as echarts from 'echarts'
import { useEffect } from 'react'
export default function() {
  let chartInstance: echarts.EChartsType
  useEffect(() => {
    const el = document.getElementById('chart')
    chartInstance = echarts.init(el as HTMLElement)
    setOption()
  })
  const setOption = () => {
    chartInstance.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })
  }
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <div id="chart" style={{width: '70%', height: '100%'}}></div>
      <div></div>
    </div>
  )
}