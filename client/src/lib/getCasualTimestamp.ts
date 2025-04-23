
export default function getCasualTimestamp(date: Date) {
  const messageDate = new Date(date)

  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }

  const formattedDate = messageDate.toLocaleDateString('en-US', dayOptions)
  const formattedTime = messageDate.toLocaleTimeString('en-US', timeOptions)

  return `${formattedDate} at ${formattedTime}`
}