import Table from './table/Table';
import { IconDelete } from '@heathmont/moon-assets';
import { CalorieEntry } from './idb/getDatabase';

type Props = {
  todayEntries: CalorieEntry[];
  removeCalories: (od: number) => void;
};

export function TodaysEntries ({ todayEntries, removeCalories }: Props) {
  return (
    <Table>
      <div className="header">
        <div className="cell left">Calories</div>
        <div className="cell right">Action</div>
      </div>
      {todayEntries.map((calories) => {
        return (
          <div className="row" key={calories.id}>
            <div className="cell left">{calories.amount}</div>
            <div className="cell right"><IconDelete onClick={() => removeCalories(calories.id as number)} color="piccolo.100"/></div>
          </div>
        )
      })}
    </Table>
  );
}