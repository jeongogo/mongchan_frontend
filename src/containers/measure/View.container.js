import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import MeasureMonitoringView from "../../components/measure/MonitoringView";
import MeasurePeriodicView from "../../components/measure/PeriodicView";
import Loader from "../../components/common/Loader";

const MeasureViewContainer = () => {
  const { id } = useParams();
  const [active, setActive] = useState("monitoring");

  // Tab Change
  const onChangeMeasure = (text) => {
    setActive(text);
  };

  // Get Athlete
  const getAthlete = async () => {
    const res = await client.get(`/api/athletes/${id}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery("athleteDetail", getAthlete);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-6xl m-auto mt-8 py-6 px-4 relative">
      <div className="flex justify-center relative">
        <h1 className="text-3xl">{data.name}</h1>
        <div className="btn-group absolute left-0 top-0">
          <button
            type="button"
            className={`py-2 px-4 mr-2 ${
              active === "monitoring" ? "bg-yellow-300" : "bg-gray-200"
            } rounded-md`}
            onClick={() => onChangeMeasure("monitoring")}
          >
            monitoring
          </button>
          <button
            type="button"
            className={`py-2 px-4 mr-2 ${
              active === "periodic" ? "bg-yellow-300" : "bg-gray-200"
            } rounded-md`}
            onClick={() => onChangeMeasure("periodic")}
          >
            periodic
          </button>
        </div>
      </div>
      {active === "monitoring" ? (
        <MeasureMonitoringView monitoring={data.measure_monitoring} />
      ) : (
        <MeasurePeriodicView periodic={data.measure_periodic} />
      )}
    </div>
  );
};

export default MeasureViewContainer;
