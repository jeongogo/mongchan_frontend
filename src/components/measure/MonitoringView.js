import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonitoringView = ({ monitoring }) => {
  const [vas, setVas] = useState([]);
  const [cmj, setCmj] = useState([]);
  const [stiffness_jump, setStiffness_jump] = useState([]);

  useEffect(() => {
    if (monitoring.length > 1) {
      monitoring.forEach((item) => {
        setVas([
          ...vas,
          {
            date: item.date,
            sleep_time: item.vas.sleep_time,
            sleep_quality: item.vas.sleep_quality,
            fatigue: item.vas.fatigue,
            muscle_soreness: item.vas.muscle_soreness,
            stress_level: item.vas.stress_level,
            mood: item.vas.mood,
            pain: item.vas.pain,
          },
        ]);
        setCmj([
          ...cmj,
          {
            date: item.date,
            jump_height_max: item.performance.cmj.jump_height_max,
            jump_height_average: item.performance.cmj.jump_height_average,
          },
        ]);
        setStiffness_jump([
          ...stiffness_jump,
          {
            date: item.date,
            jump_height_max: item.performance.stiffness_jump.jump_height_max,
            jump_height_average:
              item.performance.stiffness_jump.jump_height_average,
            rsi_max: item.performance.stiffness_jump.rsi_max,
            rsi_average: item.performance.stiffness_jump.rsi_average,
          },
        ]);
      });
    }
  }, []);

  return (
    <div className="pb-10">
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">vas</h2>
        {vas && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={vas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sleep_time" stroke="#E57373" />
              <Line type="monotone" dataKey="sleep_quality" stroke="#BA68C8" />
              <Line type="monotone" dataKey="fatigue" stroke="#7986CB" />
              <Line
                type="monotone"
                dataKey="muscle_soreness"
                stroke="#4FC3F7"
              />
              <Line type="monotone" dataKey="stress_level" stroke="#4DD0E1" />
              <Line type="monotone" dataKey="mood" stroke="#81C784" />
              <Line type="monotone" dataKey="pain" stroke="#FFD54F" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">performance - cmj</h2>
        {cmj && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={cmj}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="jump_height_max"
                stroke="#E57373"
              />
              <Line
                type="monotone"
                dataKey="jump_height_average"
                stroke="#BA68C8"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          performance - stiffness_jump
        </h2>
        {stiffness_jump && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={stiffness_jump}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="jump_height_max"
                stroke="#E57373"
              />
              <Line
                type="monotone"
                dataKey="jump_height_average"
                stroke="#BA68C8"
              />
              <Line type="monotone" dataKey="rsi_max" stroke="#7986CB" />
              <Line type="monotone" dataKey="rsi_average" stroke="#4FC3F7" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default MonitoringView;
