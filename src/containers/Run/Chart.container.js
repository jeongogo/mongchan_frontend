import { useEffect, useState } from "react";
import client from "../../lib/api/client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Loader from "../../components/Common/Loader";

const ChartContainer = () => {
  const url = window.location.href;
  const [isLoading, setIsLoading] = useState(true);
  const [teamA1, setTeamA1] = useState(0);
  const [teamB1, setTeamB1] = useState(0);
  const [teamA2, setTeamA2] = useState(0);
  const [teamB2, setTeamB2] = useState(0);
  const [teamA3, setTeamA3] = useState(0);
  const [teamB3, setTeamB3] = useState(0);
  const [runData1, setRunData1] = useState([]);
  const [runData2, setRunData2] = useState([]);
  const [runData3, setRunData3] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [teamPlus1, setTeamPlus1] = useState([]);
  const [teamPlus2, setTeamPlus2] = useState([]);
  const [teamPlus3, setTeamPlus3] = useState([]);

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
        description: `A ${teamA1.toFixed(2)} vs B ${teamB1.toFixed(2)}`,
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
    setTeamPlus1(data.week1);
    setTeamPlus2(data.week2);
    setTeamPlus3(data.week3);
  }

  const getList = async () => {
    const { data } = await client("/api/run");
    setRunData1(
      data.map((i) => {
        return {...i, data: i.week1.data}
      })
    );
    setRunData2(
      data.map((i) => {
        return {...i, data: i.week2.data}
      })
    );
    setRunData3(
      data.map((i) => {
        return {...i, data: i.week3.data}
      })
    );

    data.map((item) => {
      setTeamA1((prev) => prev + item.week1.data[0]);
      setTeamB1((prev) => prev + item.week1.data[1]);
    });

    data.map((item) => {
      setTeamA2((prev) => prev + item.week2.data[0]);
      setTeamB2((prev) => prev + item.week2.data[1]);
    });

    data.map((item) => {
      setTeamA3((prev) => prev + item.week3.data[0]);
      setTeamB3((prev) => prev + item.week3.data[1]);
    });

    const sumData = data.map((i) => {
      return {...i, sumData: i.week1.data[0] + i.week1.data[1] + i.week2.data[0] + i.week2.data[1] + i.week3.data[0] + i.week3.data[1]}
    });

    sumData.sort(function (a, b) {
      return b.sumData - a.sumData;
    });

    setSortedData(sumData);

    setIsLoading(false);
  };

  useEffect(() => {
    getTeam();
    getList();
    initKakao();
    document.title = "제8회 레이크러너 팀전 레이스";
  }, []);

  const options1 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "1라운드",
    },
    xAxis: {
      categories: ["A", "B"],
      text: '제8회 레이크러너 팀전 레이스'
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
    series: runData1,
  };

  const options2 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "2라운드",
    },
    xAxis: {
      categories: ["A", "B"],
      text: '제8회 레이크러너 팀전 레이스'
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
    series: runData2,
  };

  const options3 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "3라운드",
    },
    xAxis: {
      categories: ["A", "B"],
      text: '제8회 레이크러너 팀전 레이스'
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
    series: runData3,
  };
  
  return (
    <div className="px-6 py-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="shadow-3xl rounded-3xl px-6 py-6">
            <HighchartsReact highcharts={Highcharts} options={options1} />
            <div className="flex justify-center text-center mt-6 md:mt-8">
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-green-600 text-lg">오수민팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamA1 + +teamPlus1[0]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus1[0]})</p>
              </div>
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-blue-600 text-lg">김민서팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamB1 + +teamPlus1[1]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus1[1]})</p>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="shadow-3xl rounded-3xl px-6 py-6">
            <HighchartsReact highcharts={Highcharts} options={options2} />
            <div className="flex justify-center text-center mt-6 md:mt-8">
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-green-600 text-lg">오수민팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamA2 + +teamPlus2[0]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus2[0]})</p>
              </div>
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-blue-600 text-lg">김민서팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamB2 + +teamPlus2[1]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus2[1]})</p>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="shadow-3xl rounded-3xl px-6 py-6">
            <HighchartsReact highcharts={Highcharts} options={options3} />
            <div className="flex justify-center text-center mt-6 md:mt-8">
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-green-600 text-lg">오수민팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamA3 + +teamPlus3[0]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus3[0]})</p>
              </div>
              <div className="px-6 md:px-10 py-4 md:py-6 mx-2 md:mx-4">
                <h3 className="font-bold text-blue-600 text-lg">김민서팀</h3>
                <p className="mt-3 font-bold text-xl md:text-2xl">
                  {(+teamB3 + +teamPlus3[1]).toFixed(2)}
                </p>
                <p className="mt-1  text-red-400 font-bold">(+{teamPlus3[1]})</p>
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
}

export default ChartContainer;
