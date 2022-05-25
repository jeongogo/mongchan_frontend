import { useEffect, useState, useCallback, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import client from "../../lib/api/client";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
};

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className='flex justify-center items-center mt-10'>
      <div>남은 시간 {hours < 10 && 0}{hours}:{minutes < 10 && 0}{minutes}:{seconds < 10 && 0}{seconds}</div>
    </div>
  );
}

const ChartContainer = () => {
  const url = window.location.href;
  const [teamJ, setTeamJ] = useState();
  const [teamP, setTeamP] = useState();
  const [diffJ, setDiffJ] = useState();
  const [diffP, setDiffP] = useState();
  const [runList, setRunList] = useState([]);
  const [visible, setVisible] = useState(true);
  const d_day = new Date('2022-05-26 00:00:00');
  
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
    setDiffJ((sumJ - sumP).toFixed(2));
    setDiffP((sumP - sumJ).toFixed(2));
  }
  
  useEffect(() => {
    getList();
    initKakao();
    document.title = "제5회 레이크러너 팀전 레이스 대회";    

    if (new Date().getTime() > d_day.getTime()) {
      fire();
      setVisible(false);
    }

    const ua = navigator.userAgent.toLowerCase();

    if ( ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1 ) {
      setVisible(false);
    }
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

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);
  
  return (
    <div className='px-4 py-4'>
      <HighchartsReact highcharts={ Highcharts } options={ options }/>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className='flex justify-center text-center mt-10'>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-4'>
          <h3>Team J</h3>
          <p className='mt-1 font-bold text-2xl'>{teamJ}</p>
          <p className='mt-1 text-sm'>
            {diffJ > 0 
            ? (<span className=' text-red-600'>(+{diffJ})</span>) 
            : (<span className='text-blue-600'>({diffJ})</span>)}
          </p>
        </div>
        <div className='px-10 py-6 shadow-3xl rounded-3xl mx-4'>
          <h3>Team P</h3>
          <p className='mt-1 font-bold text-2xl'>{teamP}</p>
          <p className='mt-1 text-sm'>
            {diffP > 0 
            ? (<span className=' text-red-600'>(+{diffP})</span>) 
            : (<span className='text-blue-600'>({diffP})</span>)}
          </p>
        </div>
      </div>
      {visible && (
        <MyTimer expiryTimestamp={d_day} autoStart={true} />
      )}
      <div className='flex justify-center text-center mt-10 fixed bottom-0 left-0 w-full'>
        <button type='button' className='w-full py-4 font-medium' style={{'backgroundColor': '#f3dc00', 'color': '#391d1d'}} onClick={shareKakao}>카카오톡으로 공유하기</button>
      </div>
    </div>
  )
}

export default ChartContainer