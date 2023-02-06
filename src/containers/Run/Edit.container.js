import { useEffect, useState } from 'react';
import client from "../../lib/api/client";
import Edit from '../../components/Run/Edit';

const ChartContainer = () => {
  const [runList, setRunList] = useState([]);

  const getList = async () => {
    const res = await client.get('/api/run/edit');
    console.log(res.data)
    setRunList(res.data);
  }
  
  useEffect(() => {
    getList();
    document.title = "제8회 레이크러너 팀전 레이스";
  }, []);

  const save = async (id, week, data1, data2) => {
    const data = {
      data: [data1, data2]
    }
    
    try {
      const res = await client.post(`/api/run/edit/${id}`, { week, data });
      alert('저장 완료');
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div className='px-4 py-4'>
      <div className='flex w-48 m-auto justify-between'><span className='ml-10'>Group A</span><span>Group B</span></div>
      {runList && runList.map((item) => <Edit item={item} key={item._id} save={save} />)}
    </div>
  )
}

export default ChartContainer