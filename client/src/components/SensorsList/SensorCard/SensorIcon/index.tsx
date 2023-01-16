import React from "react";
import { IconContext } from "react-icons";
import { TbTemperature } from "react-icons/tb";
import {
  WiBarometer,
  WiHumidity,
  WiSmog,
  WiSmoke,
  WiStrongWind,
  WiNa,
} from "react-icons/wi";
import { SENSOR_NAME } from "../../../../constants";

type ISensorIcon = {
  iconName: string;
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case SENSOR_NAME.TEMREPATURE:
      return <TbTemperature />;
    case SENSOR_NAME.PRESSURE:
      return <WiBarometer />;
    case SENSOR_NAME.HUMIDITY:
      return <WiHumidity />;
    case SENSOR_NAME.PM_TWO_POINT_FIVE:
      return <WiSmoke />;
    case SENSOR_NAME.PM_TEN:
      return <WiSmog />;
    case SENSOR_NAME.WIND:
      return <WiStrongWind />;
    default:
      return <WiNa />;
  }
};

export const SensorIcon: React.FC<ISensorIcon> = ({ iconName }) => {
  return (
    <IconContext.Provider
      value={{
        style: { color: "#10A19D", fontSize: "80px" },
      }}
    >
      {getIcon(iconName)}
    </IconContext.Provider>
  );
};
