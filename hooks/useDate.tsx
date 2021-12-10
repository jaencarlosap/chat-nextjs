export const useDate = (iso?: string) => {
  const date = new Date(iso)
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  return { date, time }
}
