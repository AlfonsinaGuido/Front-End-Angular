import { sortByMostRecentPeriod } from './period-sort';

describe('sortByMostRecentPeriod', () => {
  it('prioritizes present periods and then orders by newest years', () => {
    const periods = [
      { period: '2023-2024' },
      { period: '2021-present' },
      { period: '2024-present' },
      { period: '2022-2023' },
      { period: '2021' }
    ];

    const sortedPeriods = sortByMostRecentPeriod(periods, item => item.period);

    expect(sortedPeriods.map(item => item.period)).toEqual([
      '2024-present',
      '2021-present',
      '2023-2024',
      '2022-2023',
      '2021'
    ]);
  });
});
