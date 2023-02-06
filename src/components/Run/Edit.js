import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Edit = ({ item, save }) => {
  const { week } = useParams();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [group, setGroup] = useState();

  const onSave = (id, week, data1, data2) => {
    data1 = parseFloat(data1);
    data2 = parseFloat(data2);
    data1 = data1.toFixed(2);
    data2 = data2.toFixed(2);

    save(id, week, data1, data2);
  }

  useEffect(() => {
    if (week === '1') {
      setData1(item.week1.data[0]);
      setData2(item.week1.data[1]);
    }
    if (week === '2') {
      setData1(item.week2.data[0]);
      setData2(item.week2.data[1]);
    }
    if (week === '3') {
      setData1(item.week3.data[0]);
      setData2(item.week3.data[1]);
    }
    const teamA = ['오수민', '김성범', '김태운', '이해영', '김동민', '오승준', '최원영', '정유진', '이예지', '이은규', '박지수'];
    if (teamA.includes(item.name)) {
      setGroup('A');
    } else {
      setGroup('B');
    }
  }, []);

  return (
    <div className='flex justify-center items-center py-1'>
      <div className='w-20 text-right pr-4'><span style={{ color: group === 'A' ? 'green' : 'blue'}}>{item.name}</span></div>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} className="border w-20 py-1 text-center mr-2 text-green-600" />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} className="border w-20 py-1 text-center mr-2 text-blue-600" />
      <button type='button' onClick={() => onSave(item._id, week, data1, data2)}>저장</button>
    </div>
  )
}

export default Edit