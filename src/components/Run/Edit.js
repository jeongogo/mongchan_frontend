import { useState } from "react";

const Edit = ({ item, save }) => {
  const [data1, setData1] = useState(item.data[0]);
  const [data2, setData2] = useState(item.data[1]);

  const onSave = (id, data1, data2) => {
    save(id, data1, data2);
  }

  return (
    <div className='flex justify-center items-center py-1'>
      <div className='w-20 text-right pr-4'>{item.name}</div>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} className="border w-20 py-1 text-center mr-2" />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} className="border w-20 py-1 text-center mr-2" />
      <button type='button' onClick={() => onSave(item._id, data1, data2)}>저장</button>
    </div>
  )
}

export default Edit