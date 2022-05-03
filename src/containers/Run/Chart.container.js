import { useEffect, useState } from 'react';
import client from "../../lib/api/client";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartContainer = () => {
  const [runList, setRunList] = useState([]);

  const getList = async () => {
    const res = await client('/api/run');
    setRunList(res.data);
    console.log(res)
  }
  
  useEffect(() => {
    getList();
  }, []);

  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: '제5회 레이크러너 팀전 레이스 대회'
    },
    xAxis: {
      categories: ['Team J', 'Team P']
    },
    yAxis: {
      min: 0,
      title: {
          text: '단위 : km'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    colors: [
      '#EF9A9A',
      '#F48FB1',
      '#CE93D8',
      '#B39DDB',
      '#FFE082',
      '#FFCC80',
      '#FFAB91',
      '#EF9A9A',
      '#F48FB1',
      '#CE93D8',
      '#B39DDB',
      '#FFE082',
      '#FFCC80',
      '#FFAB91',
      '#9FA8DA',
      '#81D4FA',
      '#80DEEA',
      '#80CBC4',
      '#A5D6A7',
      '#C5E1A5',
      '#E6EE9C',
      '#9FA8DA',
      '#81D4FA',
      '#80DEEA',
      '#80CBC4',
      '#A5D6A7',
      '#C5E1A5',
      '#E6EE9C',
    ],
    series: runList
  };  
  
  return (
    <div className='px-4 py-4'>
      <HighchartsReact highcharts={ Highcharts } options={ options }/>
    </div>
  )
}

export default ChartContainer