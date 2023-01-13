import React from "react";
import { useSocket } from "../../hooks/useSocket";
import { ISensor } from "../../types";
import { Label } from "../Label";
import { SensorIcon } from "../SensorIcon";
import { SwitchButton } from "../SwitchButton";
import { CONNECT, DISCONNECT } from "../../constants";

import "./style.css";

type ISensorCard = {
  sensor: ISensor;
};

export const SensorCard = ({
  sensor: { id, name, value, unit, connected },
}: ISensorCard) => {
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
