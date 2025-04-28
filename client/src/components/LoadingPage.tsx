import { useEffect, useState } from "react"

export default function LoadingPage () {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const dots = ".".repeat(dotCount)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white text-[30px] font-bold">
        Loading{dots}
      </div>
    </div>
  );
};