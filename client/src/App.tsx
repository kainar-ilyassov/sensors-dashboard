import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { ISensor, IMessage } from "./types";
import { SensorsList } from "./components/SensorsList";
import { FilterSection } from "./components/FilterSection";

const App = () => {
  const socket = useSocket();

  const [sensorsInfo, setSensorsInfo] = useState<{
    [Key: ISensor["id"]]: ISensor;
  }>({});
  const [isFiltered, toggleFilter] = useState(false);

  const onMessage = useCallback(
    (message: IMessage) => {
      const data = JSON.parse(message.data) as ISensor;
      setSensorsInfo((prev) => ({
        ...prev,
        [data.id]: data,
      }));
    },
    [setSensorsInfo]
  );

  useEffect(() => {
    socket.onmessage = onMessage;

    return () => {
      socket.close();
    };
  }, [socket, onMessage]);

  const sensorsList: ISensor[] = useMemo(
    () => Object.values(sensorsInfo),
    [sensorsInfo]
  );

  return (
    <div className="app">
      <FilterSection isFiltered={isFiltered} toggleFilter={toggleFilter} />
      <SensorsList isFiltered={isFiltered} sensors={sensorsList} />
    </div>
  );
};

export default App;
