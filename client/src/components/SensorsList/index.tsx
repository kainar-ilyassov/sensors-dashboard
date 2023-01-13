import React from "react";
import { LOADING, NOT_FOUND } from "../../constants";
import { ISensor } from "../../types";
import { PlaceHolder } from "../PlaceHolder";
import { SensorCard } from "../SensorCard";

import "./style.css";

type ISensorsList = {
  isFiltered: boolean;
  sensors: ISensor[];
};

export const SensorsList = ({ isFiltered, sensors }: ISensorsList) => {
  if (!sensors.length) {
    return <PlaceHolder label={LOADING} />;
  }

  const sensorsList = isFiltered
    ? sensors.filter((sensor: ISensor) => sensor.connected === isFiltered)
    : sensors;

  if (isFiltered && !sensorsList.length) {
    return <PlaceHolder label={NOT_FOUND} />;
  }

  return (
    <div className="sensors-wrapper">
      {sensorsList.map((sensor) => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
};
