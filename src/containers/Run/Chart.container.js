import { useEffect, useState } from "react";
import client from "../../lib/api/client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Loader from "../../components/Common/Loader";

const ChartContainer = () => {
  const url = window.location.href;
  const [isLoading, setIsLoading] = useState(true);
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [runData, setRunData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [teamPlus, setTeamPlus] = useState([]);

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
        title: "제9회 레이크러너 팀전 레이스",
        description: `A ${teamPlus[0].toFixed(2) + teamA.toFixed(2)} vs B ${teamPlus[1].toFixed(2) + teamB.toFixed(2)}`,
        imageUrl: "http://mongchan.com/share.jpg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  };

  const getTeam = async () => {
    const { data } = await client.get('/api/run/team');
    setTeamPlus(data.data);
  }

  const getList = async () => {
    const { data } = await client("/api/run");
    setRunData(
      data.map((i) => {
        return {...i, data: i.data}
      })
    );

    data.map((item) => {
      setTeamA((prev) => prev + item.data[0]);
      setTeamB((prev) => prev + item.data[1]);
    });

    const sumData = data.map((i) => {
      return {...i, sumData: i.data[0] + i.data[1]}
    });

    sumData.sort(function (a, b) {
      return b.sumData - a.sumData;
    });

    setSortedData(sumData);

    setIsLoading(false);
  };

  useEffect(() => {
    getList();
    getTeam();
    initKakao();
    document.title = "제9회 레이크러너 팀전 레이스";
  }, []);

  const options1 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["청군", "백군"],
      text: '제9회 레이크러너 팀전 레이스'
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
  
  return (
    <div className="px-6 py-6 max-w-6xl m-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="shadow-3xl rounded-3xl px-6 py-6">
            <HighchartsReact highcharts={Highcharts} options={options1} />
            <div className="flex justify-center text-center mt-6 md:mt-8">
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-blue-600 text-lg">청군</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamA + +teamPlus[0]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus[0]})</p>
              </div>
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-gray-600 text-lg">백군</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamB + +teamPlus[1]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus[1]})</p>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="py-8 px-10 m-auto mt-12 shadow-3xl rounded-3xl text-center">
            <h1 className="text-lg font-bold mb-3">개인 누적 거리</h1>
            <ul>
              {sortedData.map((user, index) => (
                <li key={user._id} className="flex py-1 justify-center">
                  <div>{index + 1}. </div>
                  <div>{user.name} -</div>
                  <div className="ml-1">{user.sumData.toFixed(2)}</div>
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
}

export default ChartContainer;
