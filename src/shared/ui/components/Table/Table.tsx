import { IChartData } from '@/entities';

import styles from './Table.module.css';

interface IProps {
  data: IChartData[];
}

export const Table = ({ data }: IProps) => {
  if (!data.length) return null;

  const rows = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr className={styles.row}>
          {rows.map((headTitle, index) => (
            <th className={styles.col} key={headTitle + index}>
              {headTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((chartData, indexCol) => (
          <tr key={indexCol} className={styles.row}>
            {Object.entries(chartData).map((chartItem, indexRow) => (
              <th className={styles.col} key={indexCol + indexRow}>
                {chartItem[1]}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
