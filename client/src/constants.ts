export const PORT = 5e3;
export const SOCKET_URL = `ws://localhost:${PORT}`;
export const SOCKET_RECONNECTION_TIMEOUT = 1000;

export enum SENSOR_NAME {
  TEMREPATURE = "Temperature",
  PRESSURE = "Pressure",
  HUMIDITY = "Humidity",
  PM_TWO_POINT_FIVE = "PM2.5",
  PM_TEN = "PM10",
  WIND = "Wind",
}

export const CONNECT = "connect";
export const LOADING = "Loading...";
export const DISCONNECT = "disconnect";
export const FILTER_LABEL = "Show only connected sensors";
export const NOT_FOUND = "There are no connected sensors yet";
