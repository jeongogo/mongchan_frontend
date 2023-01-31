import { useEffect, useState, useCallback, useRef } from "react";
import { useTimer } from "react-timer-hook";
import client from "../../lib/api/client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ReactCanvasConfetti from "react-canvas-confetti";
import Loader from "../../components/Common/Loader";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

/*
function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex justify-center text-center items-center mt-4">
      <div className="text-center">
        <img src="/h.gif" alt="" className="m-auto" />
        <div className="mt-1">
          {days > 0 && days + "일"} {hours < 10 && 0}
          {hours}:{minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </div>
      </div>
    </div>
  );
}
*/

const ChartContainer = () => {
  const url = window.location.href;
  const [isLoading, setIsLoading] = useState(true);
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [runData, setRunData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const d_day = new Date("2023-02-12 23:30:00");

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("0eb1170dc2d4792fec250441ed023311");
      }
    }
  };

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "제8회 레이크러너 팀전 레이스",
        description: `A ${teamA.toFixed(2)} vs B ${teamB.toFixed(2)}`,
        imageUrl: "http://mongchan.com/mbti.jpg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  };

  const getList = async () => {
    const { data } = await client("/api/run");
    setRunData(data);

    data.map((item) => {
      setTeamA((prev) => prev + item.data[0]);
      setTeamB((prev) => prev + item.data[1]);
    });

    const sumData = data.filter((i) => {
      return (i.sumData = i.data[0] + i.data[1]);
    });

    sumData.sort(function (a, b) {
      return b.sumData - a.sumData;
    });

    setSortedData(sumData);

    setIsLoading(false);
  };

  useEffect(() => {
    getList();
    initKakao();
    document.title = "제8회 레이크러너 팀전 레이스";

    if (new Date().getTime() > d_day.getTime()) {
      fire();
    }
  }, []);

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "1라운드",
    },
    xAxis: {
      categories: ["A", "B"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "단위 : km",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    colors: [
      "#EF9A9A",
      "#F48FB1",
      "#90CAF9",
      "#80CBC4",
      "#BBDEFB",
      "#F8BBD0",
      "#EF9A9A",
      "#CE93D8",
      "#C8E6C9",
      "#A5D6A7",
      "#F48FB1",
      "#FFAB91",
      "#B3E5FC",
      "#FFE0B2",

      "#FFCDD2",
      "#B2DFDB",
      "#80DEEA",
      "#B2EBF2",
      "#E1BEE7",
      "#81D4FA",
      "#FFCCBC",
      "#B3E5FC",
      "#90CAF9",
      "#FFCC80",
      "#F8BBD0",
      "#81D4FA",
      "#FFCDD2",
      "#BBDEFB",
    ],
    series: runData,
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
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <div className="px-6 py-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
          <div className="shadow-3xl rounded-3xl px-6 py-6">
            <HighchartsReact highcharts={Highcharts} options={options} />
            <div className="flex justify-center text-center mt-6 md:mt-8">
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-green-600 text-lg">A</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {teamA.toFixed(2)}
                </p>
              </div>
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-blue-600 text-lg">B</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {teamB.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 px-10 m-auto mt-12 shadow-3xl rounded-3xl text-center">
            <h1 className="text-lg font-bold mb-3">개인 누적 거리</h1>
            <ul>
              {sortedData.map((user, index) => (
                <li key={user._id} className="flex py-1 justify-center">
                  <div>{index + 1}. </div>
                  <div>{user.name} -</div>
                  <div className="ml-1">{user.sumData}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="fixed bottom-2 right-4">
            <button type="button" className="w-10 h-10" onClick={shareKakao}>
              <img src="/kakaotalk.png" alt="" className="w-full" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChartContainer;
