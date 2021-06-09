import { IDBPDatabase } from 'idb/build/esm/entry';
import { DBSchema, openDB } from 'idb';

export type CalorieEntry = {
  id?: number;
  amount: number;
  date: Date;
};

interface MyDatabase extends DBSchema {
  calories: {
    value: CalorieEntry,
    indexes: {
      date: Date,
    },
    key: number,
  };
}

export async function getDatabase (): Promise<IDBPDatabase<MyDatabase>> {
  const db = await openDB<MyDatabase>('CaloriesDatabase', 1, {
    upgrade(database) {
      database.createObjectStore('calories', { keyPath: 'id', autoIncrement: true }).createIndex('date', 'date');
    }
  });
  return db;
}
