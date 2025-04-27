import { useEffect, useState } from 'react';

const MacClock = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formattedTime)
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mac-clock">
      <span>{time}</span>
    </div>
  );
};

export default MacClock;