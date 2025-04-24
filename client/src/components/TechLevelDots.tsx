import clsx from 'clsx'

export default function TechLevelDots(level: number) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={clsx(
            'w-4 h-4 rounded-full',
            dot <= level ? 'bg-green-500' : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  )
}
