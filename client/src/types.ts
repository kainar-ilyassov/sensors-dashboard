export interface ISensor {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string;
}

export interface IMessage {
  data: string;
}
