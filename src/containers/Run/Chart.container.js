import { useEffect, useState } from 'react';
import client from "../../lib/api/client";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartContainer = () => {
  const url = window.location.href;
  const [teamJ, setTeamJ] = useState();
  const [teamP, setTeamP] = useState();
  const [runList, setRunList] = useState([]);
  
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('0eb1170dc2d4792fec250441ed023311');
      }
    }
  };

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({ 
      objectType: 'feed',
      content: {
        title: '제5회 레이크러너 팀전 레이스 대회',
        description: `J ${teamJ} vs P ${teamP}`,
        imageUrl: 'http://mongchan.com/mbti.jpg',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  };    

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
    initKakao();
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
      '#EF9A9A',
      '#F48FB1',
      '#90CAF9',
      '#80CBC4',
      '#BBDEFB',      
      '#F8BBD0',
      '#EF9A9A',      
      '#CE93D8',
      '#C8E6C9',
      '#A5D6A7',
      '#F48FB1',
      '#FFAB91',
      '#B3E5FC',      
      '#FFE0B2',
      
      '#FFCDD2',
      '#B2DFDB',
      '#80DEEA',
      '#B2EBF2',
      '#E1BEE7',
      '#81D4FA',
      '#FFCCBC',
      '#B3E5FC',
      '#90CAF9',
      '#FFCC80',
      '#F8BBD0',
      '#81D4FA',
      '#FFCDD2',
      '#BBDEFB',
    ],
    series: runList
  };  
  
  return (
    <div className='px-4 py-4'>
      <HighchartsReact highcharts={ Highcharts } options={ options }/>
      <div className='flex justify-center text-center mt-10'>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-4'>
          <h3>Team J</h3>
          <p className='mt-1 font-bold text-2xl'>{teamJ}</p>
        </div>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-4'>
          <h3>Team P</h3>
          <p className='mt-1 font-bold text-2xl'>{teamP}</p>
        </div>
      </div>
      <div className='flex justify-center text-center mt-10 fixed bottom-0 left-0 w-full'>
        <button type='button' className='w-full py-4 font-medium' style={{'backgroundColor': '#f3dc00', 'color': '#391d1d'}} onClick={shareKakao}>카카오톡으로 공유하기</button>
      </div>
    </div>
  )
}

export default ChartContainer