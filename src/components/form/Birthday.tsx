import { VFC, memo, useState, ChangeEvent } from 'react';

export const Birthday: VFC = memo(() => {
  const [year, setYear] = useState<string>('2000');
  const [month, setMonth] = useState<string>('1');

  const getYear = () => {
    const lists: number[] = [];
    for (let i = 1900; i <= new Date().getFullYear(); i++) {
      lists.push(i);
    }

    return lists;
  };

  const getMonth = () => {
    const lists: number[] = [];
    [...Array(12)].map((_, i) => {
      lists.push(i + 1);
    });

    return lists;
  };

  const getDay = (year: string, month: string) => {
    const lists: number[] = [];
    let max = 0;

    if (month === '2') {
      if (Number(year) % 4 === 0) {
        max = Number(year) % 400 === 0 ? 29 : Number(year) % 100 === 0 ? 28 : 29;
      } else {
        max = 28;
      }
    } else if (['1', '3', '5', '7', '8', '10', '12'].includes(month)) {
      max = 31;
    } else {
      max = 30;
    }

    [...Array(max)].map((_, i) => {
      lists.push(i + 1);
    });

    return lists;
  };

  const changeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const changeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  return (
    <div className={'c-birthday'}>
      <div className={'c-select'}>
        <select name={'year'} onChange={changeYear} value={year}>
          {getYear().map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <span>年</span>
      <div className={'c-select'}>
        <select name={'month'} onChange={changeMonth} value={month}>
          {getMonth().map((month) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <span>月</span>
      <div className={'c-select'}>
        <select name={'day'}>
          {getDay(year, month).map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <span>日</span>
    </div>
  );
});
