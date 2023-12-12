export interface IChartData {
  name: string;
  uv: number;
}

export interface IMessage {
  id: number | string;
  type: 'user-request' | 'chat-responce';
  content: string;
  chartData?: IChartData[];
}
