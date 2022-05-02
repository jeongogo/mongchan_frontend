import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartContainer = () => {
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
    series: [
      /* P */
      { name: '이상원', data: [0, 0] },
      { name: '안진홍', data: [0, 0] },
      { name: '양지형', data: [0, 0] },
      { name: '최원영', data: [0, 0] },
      { name: '강나리', data: [0, 0] },
      { name: '양정모', data: [0, 0] },
      { name: '노기식', data: [0, 0] },
      { name: '최수지', data: [0, 0] },
      { name: '서하나', data: [0, 0] },
      { name: '채송아', data: [0, 0] },
      { name: '이재형', data: [0, 0] },
      { name: '김태운', data: [0, 0] },
      { name: '이은규', data: [0, 0] },
      { name: '길영석', data: [0, 0] },
      /* J */
      { name: '박지수', data: [0, 0] },
      { name: '홍영미', data: [0, 0] },
      { name: '전홍찬', data: [0, 0] },
      { name: '김동민', data: [0, 0] },
      { name: '이유미', data: [0, 0] },
      { name: '김수연', data: [0, 0] },
      { name: '원다울', data: [0, 0] },
      { name: '한동희', data: [0, 0] },
      { name: '이지혜', data: [0, 0] },
      { name: '정유진', data: [0, 0] },
      { name: '심정윤', data: [0, 0] },
      { name: '이예지', data: [0, 0] },
      { name: '강전묵', data: [0, 0] },
      { name: '유강민', data: [0, 0] },
    ]
  };  
  
  return (
    <div className='px-4 py-4'>
      <HighchartsReact highcharts={ Highcharts } options={ options }/>
    </div>
  )
}

export default ChartContainer