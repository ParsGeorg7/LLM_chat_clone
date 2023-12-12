import { FC } from 'react';

import { Tooltip } from 'react-tooltip';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { Table } from '@/shared/ui';
import { LOCALE } from '@/app/locale';

interface IProps {
  item: any//IMessage;
}

export const Message: FC<IProps> = ({ item }: IProps): JSX.Element | null => {
  const chartData = item?.chartData;

  switch (item.type) {
    case LOCALE.messageChatResponseText:
      return (
        <div className='flex flex-col gap-2 leading-7'>
          <span className='font-bold'>{LOCALE.chatMessageTitle}</span>
          <div className='text-sm leading-7'>{item.content}</div>
          {item.chartData && (
            <>
              <ResponsiveContainer width='85%' height={400}>
                <BarChart
                  width={400}
                  height={250}
                  data={chartData}
                  margin={{
                    top: 50,
                    right: 50,
                    left: 0,
                    bottom: 10
                  }}
                >
                  {/* <CartesianGrid strokeDasharray='3 3' /> */}
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='uv' fill='#82ca9d' />
                </BarChart>
              </ResponsiveContainer>
              <div className='mt-6 flex'>
                <Table data={item.chartData} />
              </div>
            </>
          )}
        </div>
      );
    case LOCALE.messageUserQuestionText:
      return (
        <div className='flex flex-col gap-2 bg-red'>
          <span className='font-bold'>{LOCALE.userMessageTitle}</span>
          <p className='text-sm'>{item.content}</p>
        </div>
      );
    default:
      return null;
  }
};
