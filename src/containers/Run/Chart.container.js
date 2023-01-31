import { useEffect, useState, useCallback, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import client from "../../lib/api/client";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Loader from '../../components/Common/Loader';

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
    days
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className='flex justify-center text-center items-center mt-4'>
      <div className='text-center'>
          <img src="/h.gif" alt="" className='m-auto' />
          <div className='mt-1'>
            {days > 0 && days + '일'} {hours < 10 && 0}{hours}:{minutes < 10 && 0}{minutes}:{seconds < 10 && 0}{seconds}
          </div>
      </div>
    </div>
  );
}

const ChartContainer = () => {
  // const url = window.location.href;
  const [isLoading, setIsLoading] = useState(true);
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [runData, setRunData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [visible, setVisible] = useState(true);
  const d_day = new Date('2022-12-07 24:00:00');
  
  // const initKakao = () => {
  //   if (window.Kakao) {
  //     const kakao = window.Kakao;
  //     if (!kakao.isInitialized()) {
  //       kakao.init('0eb1170dc2d4792fec250441ed023311');
  //     }
  //   }
  // };

  // const shareKakao = () => {
  //   window.Kakao.Link.sendDefault({ 
  //     objectType: 'feed',
  //     content: {
  //       title: '제6회 레이크러너 팀전 레이스 <LAKE CUP 2022>',
  //       description: `촉 ${teamB.toFixed(2)} vs 위 ${teamB.toFixed(2)} vs 오 ${teamO.toFixed(2)}`,
  //       imageUrl: 'http://mongchan.com/mbti.jpg',
  //       link: {
  //         mobileWebUrl: url,
  //         webUrl: url,
  //       },
  //     },
  //   });
  // };

  const getList = async () => {
    const { data } = await client('/api/run');
    setRunData(data);

    data.map((item) => {
      setTeamA(prev => prev + item.data[0]);
      setTeamB(prev => prev + item.data[1]);
    });

    const sumData = data.filter((i) => {
      return i.sumData = i.data[0] + i.data[1];
    });

    sumData.sort(function(a, b) {
      return b.sumData - a.sumData;
    });

    setSortedData(sumData);

    setIsLoading(false);
  }
  
  useEffect(() => {
    getList();
    // initKakao();
    document.title = "제7회 레이크러너 팀전 레이스 <LAKE CUP 2022>";

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
      text: '제7회 레이크러너 팀전 레이스 <LAKE CUP 2022>'
    },
    xAxis: {
      categories: ['A', 'B']
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
    series: runData
  };

  const teamOptions = {

    title: {
      text: ''
    },
  
    yAxis: {
      title: {
        text: '단위 km'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 1 to 9'
      }
    },
  
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 1
      }
    },

    colors: [
      '#66BB6A',
      '#5C6BC0',
    ],
  
    series: [{
      name: 'A',
      data: [33.77,65.24,108.34,128.04,152.25,183.6,245.94,287.11,299.11]
    }, {
      name: 'B',
      data: [62.86,123.24,166.34,187.47,210.14,245.43,280.53,328.66,330.07]
    }],
  }

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
    <div className='pt-4 pb-20'>
      {isLoading
      ?
        <Loader />
      :
        <>
          <HighchartsReact highcharts={ Highcharts } options={ options }/>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
          {visible && (
            <MyTimer expiryTimestamp={d_day} autoStart={true} />
            )}
          <div className='flex justify-center text-center mt-6 md:mt-8'>
            <div className='px-6 md:px-10 py-4 md:py-6 shadow-3xl rounded-3xl mx-2 md:mx-4'>
              <h3 className='font-bold text-green-600 text-lg'>Group A</h3>
              <p className='mt-3 font-bold text-xl md:text-2xl'>{teamA.toFixed(2)}</p>
            </div>
            <div className='px-6 md:px-10 py-4 md:py-6 shadow-3xl rounded-3xl mx-2 md:mx-4'>
              <h3 className='font-bold text-blue-600 text-lg'>Group B</h3>
              <p className='mt-3 font-bold text-xl md:text-2xl'>{teamB.toFixed(2)}</p>
            </div>
          </div>
          <div className='mt-16'>
            <HighchartsReact highcharts={ Highcharts } options={ teamOptions }/>
          </div>
          <div className='w-60 py-6 px-10 m-auto mt-12 shadow-3xl rounded-3xl '>
            {sortedData.map((user, index) => (
              <li key={user._id} className='flex py-1'>
                <div>{index + 1}. </div>
                <div className='ml-1'>{user.name} -</div>
                <div className='w-16 ml-2'>{user.sumData}</div>               
              </li>
            ))}
          </div>
          {/* <div className='fixed bottom-2 right-4'>
            <button type='button' className='w-10 h-10' onClick={shareKakao}>
              <img src="/kakaotalk.png" alt="" className='w-full' />
            </button>
          </div> */}
        </>
      }
    </div>
  )
}

export default ChartContainer