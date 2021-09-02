export const useDate = (iso?: string) => {
  let date = new Date(iso);
  let time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return { date, time };
};
