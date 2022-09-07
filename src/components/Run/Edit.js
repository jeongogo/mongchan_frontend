import { useState } from "react";

const Edit = ({ item, save }) => {
  const [data1, setData1] = useState(item.data[0]);
  const [data2, setData2] = useState(item.data[1]);
  const [data3, setData3] = useState(item.data[2]);

  const onSave = (id, data1, data2, data3) => {
    data1 = parseFloat(data1);
    data2 = parseFloat(data2);
    data3 = parseFloat(data3);
    switch (id) {
      // 이상원 (라이딩)
      case '63071be074900732710e63d6':
        data2 += 8.01;
        break;
      // 한동희
      case '630718a874900732710e63b8':
        data1 += 27.8;
        break;
      // 노기식
      case '63071a9274900732710e63ba':
        data2 += 45;
        break;
      // 김태운
      case '63071a9c74900732710e63bb':
        data3 += 28.08;
        break;
      // 김수연
      case '63071acf74900732710e63bd':
        data1 += 3.42;
        break;
      // 이해영
      case '63071ae174900732710e63be':
        data1 += 8.22;
        break;
      // 강전묵
      case '63071aed74900732710e63bf':
        data3 += 17.75;
        break;
      // 정유진
      case '63071af674900732710e63c0':
        data1 += 10.42;
        break;
      // 전홍찬
      case '63071b0174900732710e63c1':
        data3 += 34.9;
        break;
      // 심정윤
      case '63071b0a74900732710e63c2':
        data1 += 54.57;
        break;
      // 채송아
      case '63071b1674900732710e63c3':
        data2 += 7.5;
        break;
      // 박지수
      case '63071b2074900732710e63c4':
        data3 += 18.14;
        break;
      // 최원영
      case '63071b2974900732710e63c5':
        data3 += 20.93;
        break;
      // 최수지
      case '63071b3274900732710e63c6':
        data3 += 20.2;
        break;
      // 이건희
      case '63071b3b74900732710e63c7':
        data3 += 44.77;
        break;
      // 이지혜
      case '63071b4874900732710e63c8':
        data2 += 24.35;
        break;
      // 길영석
      case '63071b5874900732710e63c9':
        data3 += 20;
        break;
      // 김동민
      case '63071b6274900732710e63ca':
        data1 += 11.39;
        break;
      // 김연욱
      case '63071b6d74900732710e63cb':
        data1 += 21.8;
        break;
      // 김민서
      case '63071b7774900732710e63cc':
        data2 += 22.9;
        break;
      // 오승준
      case '63071b8174900732710e63cd':
        data2 += 11.04;
        break;
      // 양지형
      case '63071b8a74900732710e63ce':
        data3 += 23.44;
        break;
      // 강나리
      case '63071b9274900732710e63cf':
        data2 += 7.45;
        break;
      // 박은결
      case '63071ba474900732710e63d1':
        data1 += 14.16;
        break;
      // 진유정
      case '63071bad74900732710e63d2':
        data1 += 11.86;
        break;
      // 유강민
      case '63071bb974900732710e63d3':
        data2 += 4.9;
        break;
      // 강채린
      case '63071bd574900732710e63d5':
        data2 += 26.78;
        break;
      // 이은규
      case '63071c4974900732710e63db':
        data2 += 10;
        break;
      default:
        break;
    }

    data1 = data1.toFixed(2);
    data2 = data2.toFixed(2);
    data3 = data3.toFixed(2);

    save(id, data1, data2, data3);
  }

  return (
    <div className='flex justify-center items-center py-1'>
      <div className='w-20 text-right pr-4'>{item.name}</div>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} className="border w-20 py-1 text-center mr-2 text-green-600" />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} className="border w-20 py-1 text-center mr-2 text-blue-600" />
      <input type="text" value={data3} onChange={(e) => setData3(e.target.value)} className="border w-20 py-1 text-center mr-2 text-red-500 " />
      <button type='button' onClick={() => onSave(item._id, data1, data2, data3)}>저장</button>
    </div>
  )
}

export default Edit