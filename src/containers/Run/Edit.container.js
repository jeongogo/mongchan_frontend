import { useEffect, useState } from 'react';
import client from "../../lib/api/client";
import Edit from '../../components/Run/Edit';

const ChartContainer = () => {
  const [runList, setRunList] = useState([]);
  const [teamData1, setTeamData1] = useState(0);
  const [teamData2, setTeamData2] = useState(0);

  const getList = async () => {
    const { data } = await client.get('/api/run/edit');
    setRunList(data);
    console.log(data)
  }

  const getTeam = async () => {
    const { data } = await client.get('/api/run/team');
    setTeamData1(data.data[0]);
    setTeamData2(data.data[1]);
  }
  
  useEffect(() => {
    getList();
    getTeam();
    document.title = "제9회 레이크러너 팀전 레이스";
  }, []);

  const save = async (id, data1, data2) => {
    const data = {
      data: [data1, data2]
    }
    try {
      const res = await client.post(`/api/run/edit/${id}`, data);
      alert('저장 완료');
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onSaveTeam = async () => {
    try {
      const res = await client.post('/api/run/team', { data: [teamData1, teamData2] });
      alert('저장 완료');
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className='px-4 py-4'>
      <div className='flex w-48 m-auto justify-between'><span className='ml-10'>Group A</span><span>Group B</span></div>
      <div className='flex justify-center items-center py-1'>
        <div className='w-20 text-right pr-4'>팀 가산점</div>
        <input type="text" value={teamData1} onChange={(e) => setTeamData1(e.target.value)} className="border w-20 py-1 text-center mr-2 text-blue-600" />
        <input type="text" value={teamData2} onChange={(e) => setTeamData2(e.target.value)} className="border w-20 py-1 text-center mr-2 text-black-600" />
        <button type='button' onClick={() => onSaveTeam()}>저장</button>
      </div>
      {runList && runList.map((item) => <Edit item={item} key={item._id} save={save} />)}
    </div>
  )
}

export default ChartContainer