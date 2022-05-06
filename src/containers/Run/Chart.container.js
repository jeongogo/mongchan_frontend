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
    document.title = "제5회 레이크러너 팀전 레이스 대회"
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
      '#BBDEFB',
      '#90CAF9',
      '#B3E5FC',
      '#81D4FA',
      '#B2EBF2',
      '#80DEEA',
      '#B2DFDB',
      '#80CBC4',
      '#C8E6C9',
      '#A5D6A7',
      '#BBDEFB',
      '#90CAF9',
      '#B3E5FC',
      '#81D4FA',
      '#FFCDD2',
      '#EF9A9A',
      '#F8BBD0',
      '#F48FB1',
      '#E1BEE7',
      '#CE93D8',
      '#FFCCBC',
      '#FFAB91',
      '#FFE0B2',
      '#FFCC80',
      '#F8BBD0',
      '#F48FB1',
      '#FFCDD2',
      '#EF9A9A',
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