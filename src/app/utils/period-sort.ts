interface ParsedPeriod {
  startYear: number;
  endYear: number;
  isPresent: boolean;
}

const FALLBACK_YEAR = Number.MIN_SAFE_INTEGER;

export function sortByMostRecentPeriod<T>(items: T[], getPeriod: (item: T) => string): T[] {
  return [...items].sort((left, right) => comparePeriods(getPeriod(left), getPeriod(right)));
}

function comparePeriods(leftPeriod: string, rightPeriod: string): number {
  const left = parsePeriod(leftPeriod);
  const right = parsePeriod(rightPeriod);

  if (left.isPresent !== right.isPresent) {
    return left.isPresent ? -1 : 1;
  }

  if (left.isPresent && left.startYear !== right.startYear) {
    return right.startYear - left.startYear;
  }

  if (left.endYear !== right.endYear) {
    return right.endYear - left.endYear;
  }

  return right.startYear - left.startYear;
}

function parsePeriod(period: string): ParsedPeriod {
  const normalizedPeriod = normalizePeriod(period);
  const years = normalizedPeriod.match(/\d{4}/g) || [];
  const startYear = parseYear(years[0]);
  const isPresent = /\b(present|presente|actual|actualidad)\b/.test(normalizedPeriod);

  return {
    startYear,
    endYear: isPresent ? startYear : parseYear(years[1] || years[0]),
    isPresent
  };
}

function parseYear(year: string): number {
  return year ? Number(year) : FALLBACK_YEAR;
}

function normalizePeriod(period: string): string {
  return (period || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
