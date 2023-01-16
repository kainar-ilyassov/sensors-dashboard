import React from "react";
import { useSocket } from "../../../hooks/useSocket";
import { ISensor } from "../../../types";
import { SensorIcon } from "./SensorIcon";
import { Label, SwitchButton } from "../../common";
import { CONNECT, DISCONNECT } from "../../../constants";

import "./style.css";

type ISensorCard = {
  sensor: ISensor;
};

export const SensorCard: React.FC<ISensorCard> = ({
  sensor: { id, name, value, unit, connected },
}) => {
  const socket = useSocket();

  const toggleButton = (isToggled: boolean) => {
    socket.send(
      JSON.stringify({
        command: isToggled ? CONNECT : DISCONNECT,
        id,
      })
    );
  };

  return (
    <div className="card">
      <Label labelName={name} />
      <SensorIcon iconName={name} />
      <Label labelName={value ? value : "NA"} />
      <Label labelName={unit} />
      <SwitchButton toggled={connected} onClick={toggleButton} />
    </div>
  );
};
