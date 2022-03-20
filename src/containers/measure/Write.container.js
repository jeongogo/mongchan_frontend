import React, { useState, useEffect } from "react";
import useStore from "../../modules/store";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import MeasureMonitoringWrite from "../../components/measure/MonitoringWrite";
import MeasurePeriodicWrite from "../../components/measure/PeriodicWrite";
import Loader from "../../components/common/Loader";

const MeasureWriteContainer = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const { id } = useParams();
  const [active, setActive] = useState("monitoring");

  // Login Check
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);

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

  // Submit Monitoring
  const onSumitMonitoring = async (data) => {
    try {
      await client.post(`/api/athletes/${id}/write/monitoring`, data);
      navigate(`/athletes/${id}/view`);
    } catch (err) {
      console.log(err);
    }
  };

  // Submit Periodic
  const onSumitPeriodic = async (data) => {
    try {
      await client.post(`/api/athletes/${id}/write/periodic`, data);
      navigate(`/athletes/${id}/view`);
    } catch (err) {
      console.log(err);
    }
  };

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
        <MeasureMonitoringWrite onSumitMeasure={onSumitMonitoring} />
      ) : (
        <MeasurePeriodicWrite onSumitMeasure={onSumitPeriodic} />
      )}
    </div>
  );
};

export default MeasureWriteContainer;
