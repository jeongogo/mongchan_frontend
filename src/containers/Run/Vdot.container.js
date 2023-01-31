import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../assets/1.JPG';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.JPG';
import img5 from '../../assets/5.JPG';
import img6 from '../../assets/6.JPG';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.JPG';
import img9 from '../../assets/9.JPG';
import img10 from '../../assets/10.JPG';
import img11 from '../../assets/11.JPG';

const vdot = [
	{
		"vdot": "86",
		"level": "11",
		"name": "신",
		"five": "12:37.3",
		"ten": "알 수 없습니다. 얼른 올림픽에 참가하세요.",
		"half": "알 수 없습니다. 얼른 올림픽에 참가하세요.",
		"full": "알 수 없습니다. 얼른 올림픽에 참가하세요."
	},
	{
		"vdot": "85",
		"level": "10",
		"name": "킵초게",
		"five": "12:37.4",
		"ten": "26:19",
		"half": "57:50",
		"full": "2:01:10"
	},
	{
		"vdot": "84",
		"level": "10",
		"name": "킵초게",
		"five": "12:45.2",
		"ten": "26:34",
		"half": "58:25",
		"full": "2:02:24"
	},
	{
		"vdot": "83",
		"level": "10",
		"name": "킵초게",
		"five": "12:53",
		"ten": "26:51",
		"half": "59:01",
		"full": "2:03:40"
	},
	{
		"vdot": "82",
		"level": "10",
		"name": "킵초게",
		"five": "13:01.1",
		"ten": "27:07",
		"half": "59:38",
		"full": "2:04:57"
	},
	{
		"vdot": "81",
		"level": "10",
		"name": "킵초게",
		"five": "13:09.3",
		"ten": "27:24",
		"half": "1:00:15",
		"full": "2:06:17"
	},
	{
		"vdot": "80",
		"level": "9",
		"name": "이봉주",
		"five": "13:17.8",
		"ten": "27:41",
		"half": "1:00:54",
		"full": "2:07:38"
	},
	{
		"vdot": "79",
		"level": "9",
		"name": "이봉주",
		"five": "13:29",
		"ten": "27:59",
		"half": "1:01:34",
		"full": "2:09:02"
	},
	{
		"vdot": "78",
		"level": "9",
		"name": "이봉주",
		"five": "13:35",
		"ten": "28:17",
		"half": "1:02:15",
		"full": "2:10:27"
	},
	{
		"vdot": "77",
		"level": "9",
		"name": "이봉주",
		"five": "13:44",
		"ten": "28:36",
		"half": "1:02:56",
		"full": "2:11:54"
	},
	{
		"vdot": "76",
		"level": "9",
		"name": "이봉주",
		"five": "13:54",
		"ten": "28:55",
		"half": "1:03:39",
		"full": "2:13:23"
	},
	{
		"vdot": "75",
		"level": "9",
		"name": "이봉주",
		"five": "14:03",
		"ten": "29:14",
		"half": "1:04:23",
		"full": "2:14:55"
	},
	{
		"vdot": "74",
		"level": "9",
		"name": "이봉주",
		"five": "14:13",
		"ten": "29:34",
		"half": "1:05:08",
		"full": "2:16:29"
	},
	{
		"vdot": "73",
		"level": "9",
		"name": "이봉주",
		"five": "14:23",
		"ten": "29:55",
		"half": "1:05:54",
		"full": "2:18:05"
	},
	{
		"vdot": "72",
		"level": "9",
		"name": "이봉주",
		"five": "14:33",
		"ten": "30:16",
		"half": "1:06:42",
		"full": "2:19:44"
	},
	{
		"vdot": "71",
		"level": "9",
		"name": "이봉주",
		"five": "14:44",
		"ten": "30:38",
		"half": "1:07:31",
		"full": "2:21:26"
	},
	{
		"vdot": "70",
		"level": "9",
		"name": "이봉주",
		"five": "14:55",
		"ten": "31:00",
		"half": "1:08:21",
		"full": "2:23:10"
	},
	{
		"vdot": "69",
		"level": "9",
		"name": "이봉주",
		"five": "15:06",
		"ten": "31:23",
		"half": "1:09:12",
		"full": "2:24:57"
	},
	{
		"vdot": "68",
		"level": "9",
		"name": "이봉주",
		"five": "15:18",
		"ten": "31:46",
		"half": "1:10:05",
		"full": "2:26:47"
	},
	{
		"vdot": "67",
		"level": "9",
		"name": "이봉주",
		"five": "15:29",
		"ten": "32:11",
		"half": "1:11:00",
		"full": "2:28:40"
	},
	{
		"vdot": "66",
		"level": "8",
		"name": "손기정",
		"five": "15:42",
		"ten": "32:35",
		"half": "1:11:56",
		"full": "2:30:36"
	},
	{
		"vdot": "65",
		"level": "8",
		"name": "손기정",
		"five": "15:54",
		"ten": "33:01",
		"half": "1:12:53",
		"full": "2:32:35"
	},
	{
		"vdot": "64",
		"level": "8",
		"name": "손기정",
		"five": "16:07",
		"ten": "33:28",
		"half": "1:13:53",
		"full": "2:34:38"
	},
	{
		"vdot": "63",
		"level": "8",
		"name": "손기정",
		"five": "16:20",
		"ten": "33:55",
		"half": "1:14:54",
		"full": "2:36:44"
	},
	{
		"vdot": "62",
		"level": "8",
		"name": "손기정",
		"five": "16:34",
		"ten": "34:23",
		"half": "1:15:57",
		"full": "2:38:54"
	},
	{
		"vdot": "61",
		"level": "8",
		"name": "손기정",
		"five": "16:48",
		"ten": "34:52",
		"half": "1:17:02",
		"full": "2:41:08"
	},
	{
		"vdot": "60",
		"level": "7",
		"name": "엘리트",
		"five": "17:03",
		"ten": "35:22",
		"half": "1:18:09",
		"full": "2:43:25"
	},
	{
		"vdot": "59",
		"level": "7",
		"name": "엘리트",
		"five": "17:17",
		"ten": "35:52",
		"half": "1:19:18",
		"full": "2:45:47"
	},
	{
		"vdot": "58",
		"level": "7",
		"name": "엘리트",
		"five": "17:33",
		"ten": "36:24",
		"half": "1:20:30",
		"full": "2:48:14"
	},
	{
		"vdot": "57",
		"level": "7",
		"name": "엘리트",
		"five": "17:49",
		"ten": "36:57",
		"half": "1:21:43",
		"full": "2:50:45"
	},
	{
		"vdot": "56",
		"level": "7",
		"name": "엘리트",
		"five": "18:05",
		"ten": "37:31",
		"half": "1:23:00",
		"full": "2:53:20"
	},
	{
		"vdot": "55",
		"level": "7",
		"name": "엘리트",
		"five": "18:22",
		"ten": "38:06",
		"half": "1:24:18",
		"full": "2:56:01"
	},
	{
		"vdot": "54",
		"level": "7",
		"name": "엘리트",
		"five": "18:40",
		"ten": "38:42",
		"half": "1:25:40",
		"full": "2:58:47"
	},
	{
		"vdot": "53",
		"level": "6",
		"name": "고급 러너",
		"five": "18:58",
		"ten": "39:20",
		"half": "1:27:04",
		"full": "3:01:39"
	},
	{
		"vdot": "52",
		"level": "6",
		"name": "고급 러너",
		"five": "19:17",
		"ten": "39:59",
		"half": "1:28:31",
		"full": "3:04:36"
	},
	{
		"vdot": "51",
		"level": "6",
		"name": "고급 러너",
		"five": "19:36",
		"ten": "40:39",
		"half": "1:30:02",
		"full": "3:07:39"
	},
	{
		"vdot": "50",
		"level": "6",
		"name": "고급 러너",
		"five": "19:57",
		"ten": "41:21",
		"half": "1:31:35",
		"full": "3:10:49"
	},
	{
		"vdot": "49",
		"level": "6",
		"name": "고급 러너",
		"five": "20:18",
		"ten": "42:04",
		"half": "1:33:12",
		"full": "3:14:06"
	},
	{
		"vdot": "48",
		"level": "6",
		"name": "고급 러너",
		"five": "20:39",
		"ten": "42:50",
		"half": "1:34:53",
		"full": "3:17:29"
	},
	{
		"vdot": "47",
		"level": "6",
		"name": "고급 러너",
		"five": "21:02",
		"ten": "43:36",
		"half": "1:36:38",
		"full": "3:21:00"
	},
	{
		"vdot": "46",
		"level": "6",
		"name": "고급 러너",
		"five": "21:25",
		"ten": "44:25",
		"half": "1:38:27",
		"full": "3:24:39"
	},
	{
		"vdot": "45",
		"level": "5",
		"name": "중급 러너",
		"five": "21:50",
		"ten": "45:16",
		"half": "1:40:20",
		"full": "3:28:26"
	},
	{
		"vdot": "44",
		"level": "5",
		"name": "중급 러너",
		"five": "22:15",
		"ten": "46:09",
		"half": "1:42:17",
		"full": "3:32:23"
	},
	{
		"vdot": "43",
		"level": "5",
		"name": "중급 러너",
		"five": "22:41",
		"ten": "47:04",
		"half": "1:44:20",
		"full": "3:36:28"
	},
	{
		"vdot": "42",
		"level": "5",
		"name": "중급 러너",
		"five": "23:09",
		"ten": "48:01",
		"half": "1:46:27",
		"full": "3:40:43"
	},
	{
		"vdot": "41",
		"level": "5",
		"name": "중급 러너",
		"five": "23:38",
		"ten": "49:01",
		"half": "1:48:40",
		"full": "3:45:09"
	},
	{
		"vdot": "40",
		"level": "4",
		"name": "초급 러너",
		"five": "24:08",
		"ten": "50:03",
		"half": "1:50:59",
		"full": "3:49:45"
	},
	{
		"vdot": "39",
		"level": "4",
		"name": "초급 러너",
		"five": "24:39",
		"ten": "51:09",
		"half": "1:53:24",
		"full": "3:54:34"
	},
	{
		"vdot": "38",
		"level": "4",
		"name": "초급 러너",
		"five": "25:12",
		"ten": "52:17",
		"half": "1:55:55",
		"full": "3:59:35"
	},
	{
		"vdot": "37",
		"level": "4",
		"name": "초급 러너",
		"five": "25:46",
		"ten": "53:29",
		"half": "1:58:34",
		"full": "4:04:50"
	},
	{
		"vdot": "36",
		"level": "4",
		"name": "초급 러너",
		"five": "26:22",
		"ten": "54:44",
		"half": "2:01:19",
		"full": "4:10:19"
	},
	{
		"vdot": "35",
		"level": "3",
		"name": "런린이",
		"five": "27:00",
		"ten": "56:03",
		"half": "2:04:13",
		"full": "4:16:03"
	},
	{
		"vdot": "34",
		"level": "3",
		"name": "런린이",
		"five": "27:39",
		"ten": "57:26",
		"half": "2:07:16",
		"full": "4:22:03"
	},
	{
		"vdot": "33",
		"level": "3",
		"name": "런린이",
		"five": "28:21",
		"ten": "58:54",
		"half": "2:10:27",
		"full": "4:28:22"
	},
	{
		"vdot": "32",
		"level": "2",
		"name": "거북이",
		"five": "29:05",
		"ten": "60:26",
		"half": "2:13:49",
		"full": "4:34:59"
	},
	{
		"vdot": "31",
		"level": "2",
		"name": "거북이",
		"five": "29:51",
		"ten": "62:03",
		"half": "2:17:21",
		"full": "4:41:57"
	},
	{
		"vdot": "30",
		"level": "1",
		"name": "달팽이",
		"five": "30:40",
		"ten": "63:46",
		"half": "2:21:04",
		"full": "4:49:17"
	},
	{
		"vdot": "29",
		"level": "1",
		"name": "달팽이",
		"five": "60:00",
		"ten": "알 수 없습니다.",
		"half": "알 수 없습니다.",
		"full": "알 수 없습니다."
	}
]

const VdotContainer = () => {
  const [record, setRecord] = useState('');
  const [result, setResult] = useState('');
  const [isResult, setIsResult] = useState(false);

  const onRestart = () => {
    setRecord('');
    setIsResult(false);
  }

  const minuteToSeconds = useCallback((str) => {
    return parseInt(str[0] * 60) + parseInt(str[1]);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const found = vdot.find((v) => {
      const v_str = v.five.split(':');
      const r_str = record.split(':');

      const v_calc = minuteToSeconds(v_str);
      const r_calc = minuteToSeconds(r_str);

      return r_calc < v_calc
    });
    setResult(found);
    setIsResult(true);
  }

  return (
    <Container>
      {isResult
        ?
        <div className="result">
          <h1>당신은 {result.name}입니다.</h1>
          <div className="img">
            {result.level === '1' && <img src={img1} loading="lazy" />}
            {result.level === '2' && <img src={img2} loading="lazy" />}
            {result.level === '3' && <img src={img3} loading="lazy" />}
            {result.level === '4' && <img src={img4} loading="lazy" />}
            {result.level === '5' && <img src={img5} loading="lazy" />}
            {result.level === '6' && <img src={img6} loading="lazy" />}
            {result.level === '7' && <img src={img7} loading="lazy" />}
            {result.level === '8' && <img src={img8} loading="lazy" />}
            {result.level === '9' && <img src={img9} loading="lazy" />}
            {result.level === '10' && <img src={img10} loading="lazy" />}
            {result.level === '11' && <img src={img11} loading="lazy" />}
          </div>
          <ul>
            <li>
              5K 기록은 {record}입니다.
            </li>
            <li>
              10K 예상 기록은 {result.ten}{(result.level !== '1' && result.level !== '11') && <>입니다.</>}
            </li>
            <li>
              Half 예상 기록은 {result.half}{(result.level !== '1' && result.level !== '11') && <>입니다.</>}
            </li>
            <li>
              Full 예상 기록은 {result.full}{(result.level !== '1' && result.level !== '11') && <>입니다.</>}
            </li>
          </ul>
          <div className="btn">
            <button type='button' onClick={onRestart} className='restart'>다시하기</button>
          </div>
        </div>
        :
        <div className="form">
          <h1>5K 기록을 입력해 주세요. <span>예) 23:30</span></h1>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={(e) => setRecord(e.target.value)} value={record} placeholder="mm:ss" />
            <button type='submit' className='submit'>확인</button>
          </form>
        </div>
      }
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  button {
    padding: 7px 20px;
    background-color: #fafafa;
    border: 1px solid #ccc;
  }
  .form {
    text-align: center;
    h1 {
      margin-bottom: 15px;
      span {
        font-size: 16px;
      }
    }
    input[type='text'] {
      padding: 7px;
      margin-right: 10px;
      max-width: 150px;
      border: 1px solid #ccc;
      outline: none;
    }
  }
  .result {
    h1 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    .img {
      max-width: 300px;
      margin: 0 auto;
    }
    h2 {
      margin-top: 26px;
      font-weight: bold;
    }
    ul {
      margin-top: 30px;
      li {
        margin-bottom: 10px;
        font-size: 18px;
        text-align: center;
        h3 {
          font-weight: bold;
          flex-shrink: 0;
        }
      }
    }
    .btn {
      margin-top: 40px;
      text-align: center;
    }
  }
`;

export default VdotContainer