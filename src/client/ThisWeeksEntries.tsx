import { CalorieEntry, getDatabase } from './idb/getDatabase';
import { useEffect, useState } from 'react';
import { subDays } from 'date-fns';
import { VerticalBarChart } from '@heathmont/moon-charts';

type Props = {
  todayEntries: CalorieEntry[];
};

export function ThisWeeksEntries ({ todayEntries }: Props) {
  const [historical, setHistorical] = useState<CalorieEntry[][]>([]);
  useEffect(() => {
    (async () => {
      const today = new Date();
      const db = await getDatabase();
      const mapper = async (val: number) => {
        const lowerBound = subDays(today, val + 1);
        const higherBound = subDays(today, val);
        const keyRangeValue = IDBKeyRange.bound(
          lowerBound,
          higherBound,
        );
        return (await db.getAllFromIndex('calories', 'date', keyRangeValue));
      };
      setHistorical(await Promise.all([1,2,3,4,5,6,7].map(mapper)));
    })();
  }, [])

  const barChartToday = {
    label: <b>Today</b>,
    value: todayEntries.reduce((acc, item) => acc + item.amount, 0),
    code: 'today',
    dataKey: '',
  };
  const barChartHistoricalData = historical.map(((val, index) => {
    const today = new Date();
    const date = subDays(today, index + 1)
    return {
      label: <p>{ date.toLocaleDateString() }</p>,
      value: val.reduce((acc, item) => acc + item.amount, 0),
      code: date.toLocaleDateString(),
      dataKey: '',
    };
  }));

  return (
    <VerticalBarChart
      height="100%"
      positiveColor="frieza.100"
      icon={() => null}
      title="Last 7 days"
      data={[barChartToday,...barChartHistoricalData]}
    />
  );
}