import React, { useEffect, useState, createContext, ReactNode } from "react";
import { SOCKET_URL, SOCKET_RECONNECTION_TIMEOUT } from "../constants";

const webSocket = new WebSocket(SOCKET_URL);

export const SocketContext = createContext(webSocket);

interface ISocketProvider {
  children: ReactNode;
}

export const SocketProvider = (props: ISocketProvider) => {
  const [ws, setWs] = useState<WebSocket>(webSocket);

  useEffect(() => {
    const onClose = () => {
      setTimeout(() => {
        setWs(new WebSocket(SOCKET_URL));
      }, SOCKET_RECONNECTION_TIMEOUT);
    };

    ws.onclose = onClose;

    ws.onerror = (error) => {
      console.log("Websocket connection error", error);
    };

    return () => {
      ws.close();
    };
  }, [ws, setWs]);

  return (
    <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
  );
};
