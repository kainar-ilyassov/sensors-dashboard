import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { ISensor, IMessage } from "./types";
import { SensorsList } from "./components/SensorsList";
import { FilterSection } from "./components/FilterSection";

const App = () => {
  const socket = useSocket();

  const [sensorsInfo, setSensorsInfo] = useState<ISensor | Object>({});
  const [isFiltered, toggleFilter] = useState(false);

  const onMessage = useCallback((message: IMessage) => {
    const data = JSON.parse(message.data);
    setSensorsInfo((prev: ISensor) => ({
      ...prev,
      [data.id]: data,
    }));
  }, []);

  useEffect(() => {
    socket.onmessage = onMessage;

    return () => {
      socket.close();
    };
  }, [socket, onMessage]);

  const sensorsList: ISensor[] = Object.values(sensorsInfo);

  return (
    <div className="app">
      <FilterSection isFiltered={isFiltered} toggleFilter={toggleFilter} />
      <SensorsList isFiltered={isFiltered} sensors={sensorsList} />
    </div>
  );
};

export default App;
