import React, { useMemo } from "react";
import { LOADING, NOT_FOUND } from "../../constants";
import { ISensor } from "../../types";
import { PlaceHolder } from "../common";
import { SensorCard } from "./SensorCard";

import "./style.css";

type ISensorsList = {
  isFiltered: boolean;
  sensors: ISensor[];
};

export const SensorsList: React.FC<ISensorsList> = ({
  isFiltered,
  sensors,
}) => {
  const sensorsList = useMemo(
    () =>
      isFiltered
        ? sensors.filter((sensor: ISensor) => sensor.connected === isFiltered)
        : sensors,
    [isFiltered, sensors]
  );

  if (!sensors.length) {
    return <PlaceHolder label={LOADING} />;
  }

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
