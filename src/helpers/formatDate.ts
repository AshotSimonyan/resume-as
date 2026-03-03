const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const formatMonthYear = (value: string): string => {
  const [year, month] = value.split('-').map(Number);
  return `${MONTHS[Math.max(0, month - 1)]} ${year}`;
};

export const formatDateRange = (startDate: string, endDate: string | null): string => {
  const endLabel = endDate ? formatMonthYear(endDate) : 'Present';
  return `${formatMonthYear(startDate)} - ${endLabel}`;
};
