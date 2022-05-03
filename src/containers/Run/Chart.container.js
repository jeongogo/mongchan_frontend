import { useEffect, useState } from 'react';
import client from "../../lib/api/client";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartContainer = () => {
  const [teamJ, setTeamJ] = useState();
  const [teamP, setTeamP] = useState();
  const [runList, setRunList] = useState([]);

  const getList = async () => {
    const res = await client('/api/run');
    setRunList(res.data);
    
    let sumJ = null;
    let sumP = null;

    res.data.map((item) => {
      sumJ += item.data[0];
      sumP += item.data[1];
    });
    setTeamJ(sumJ.toFixed(2));
    setTeamP(sumP.toFixed(2));
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
      <div className='flex justify-center text-center mt-10'>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-6'>
          <h3>Team J</h3>
          <p className='mt-1 font-bold text-2xl'>{teamJ}</p>
        </div>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-6'>
          <h3>Team P</h3>
          <p className='mt-1 font-bold text-2xl'>{teamP}</p>
        </div>
      </div>
    </div>
  )
}

export default ChartContainer