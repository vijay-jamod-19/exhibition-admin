export const getCountDayToTargetDate = (targetDate: string): number => {
  // Current date
  const currentDate: Date = new Date();

  // Target date passed as a string (e.g., '2024-09-25')
  const target: Date = new Date(targetDate);

  // Calculate the difference in milliseconds
  const differenceMs: number = target.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const differenceDays: number = Math.ceil(
    differenceMs / (1000 * 60 * 60 * 24)
  );

  return differenceDays;
};
