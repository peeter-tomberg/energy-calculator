import { Heading, Stack } from "@heathmont/moon-components";
import { useEffect, useState } from 'react';
import { subDays } from 'date-fns';
import { CalorieEntry, getDatabase } from '../src/client/idb/getDatabase';
import { CalorieButtons } from '../src/client/CalorieButtons';
import { TodaysEntries } from '../src/client/TodaysEntries';
import { ThisWeeksEntries } from '../src/client/ThisWeeksEntries';

const StackList = () => {
  const [todayEntries, setTodayEntries] = useState<CalorieEntry[]>([]);
  useEffect(() => {
    (async () => {
      const db = await getDatabase();
      const keyRangeValue = IDBKeyRange.lowerBound(subDays(new Date(), 1));
      setTodayEntries(await db.getAllFromIndex('calories', 'date', keyRangeValue));
    })();
  }, []);

  const addCalories = async (number: number) => {
    const result = {
      date: new Date(),
      amount: number,
    };
    const db = await getDatabase();
    const id = await db.add('calories', {
      date: new Date(),
      amount: number,
    });
    const entry: CalorieEntry = {
      id,
      ...result,
    }
    setTodayEntries([...todayEntries, entry]);
  };
  const removeCalories = async (id: number) => {
    const newValue = todayEntries.filter((entry => entry.id !== id));
    setTodayEntries(newValue);
    const db = await getDatabase();
    await db.delete('calories', id);
  };
  return (
    <Stack space={'xlarge'}>
      <Heading size={32}>Energy calculator</Heading>
      <CalorieButtons onClick={addCalories}/>
      <TodaysEntries todayEntries={todayEntries} removeCalories={removeCalories}/>
      <ThisWeeksEntries todayEntries={todayEntries}/>
    </Stack>
  );
}

export default StackList;
