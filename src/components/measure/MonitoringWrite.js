import React from "react";
import { useForm } from "react-hook-form";

const MonitoringWrite = ({ onSumitMeasure }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => onSumitMeasure(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="absolute top-8 right-4">
        <input type="date" {...register("date")} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12 pb-10">
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">VAS</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Sleep time</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.sleep_time")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Sleep quality</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.sleep_quality")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Fatigue</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.fatigue")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Muscle soreness</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.muscle_soreness")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Stress level</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.stress_level")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Mood</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.mood")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Pain</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("vas.pain")}
              />
            </li>
          </ul>
        </div>
        <div className="py-6 px-6 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-4">
            Performance <span className="font-normal">CMJ</span>
          </h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>jump_height_max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.cmj.jump_height_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>jump_height_average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.cmj.jump_height_average")}
              />
            </li>
          </ul>
        </div>
        <div className="py-6 px-6 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-4">
            Performance <span className="font-normal">Stiffness Jump</span>
          </h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Jump height max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.stiffness_jump.jump_height_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Jump height average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.stiffness_jump.jump_height_average")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.stiffness_jump.rsi_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance.stiffness_jump.rsi_average")}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16 col-start-1 col-end-4 text-center">
        <button
          type="submit"
          className="bg py-4 px-14 bg-yellow-400 rounded-3xl text-xl"
        >
          등록하기
        </button>
      </div>
    </form>
  );
};

export default MonitoringWrite;
