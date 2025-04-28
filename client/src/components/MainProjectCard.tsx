import TechLevelDots from './TechLevelDots'
type Tech = {
  name: string
  level: number
}
export default function MainProjectCart() {
  const frontend: Tech[] = [
    { name: 'React', level: 5 },
    { name: 'Next.js', level: 4 },
    { name: 'Typescript', level: 5 },
    { name: 'Javascript', level: 5 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Axios', level: 4 },
    { name: 'Zustand', level: 5 },
    { name: 'Cloudinary', level: 4 },
  ]

  const backend: Tech[] = [
    { name: 'Express', level: 5 },
    { name: '.NET', level: 2 },
    { name: 'Prisma', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Stripe', level: 4 },
    { name: 'Auth0', level: 5 },
    { name: 'Firebase Auth', level: 5 },
    { name: 'JWT', level: 4 },
  ]

  const database: Tech[] = [
    { name: 'SQLite3', level: 5 },
    { name: 'PostgreSQL', level: 4 },
    { name: 'Firebase', level: 5 },
  ]

  const tools: Tech[] = [
    { name: 'Firebase Hosting', level: 3 },
    { name: 'Vercel', level: 5 },
    { name: 'Railway', level: 5 },
  ]

  return (
    <div className="w-full h-full p-4 rounded shadow mb-4 flex flex-col items-center overflow-scroll">
      <h1 className="text-[30px] my-4">💻 Frontend</h1>
      <div className="grid grid-cols-2 gap-8 mb-6">
        {frontend.map((item) => (
          <div key={item.name} className="flex flex-row gap-4 w-full min-w-[200px] max-w-[300px] justify-between">
            <p className="text-[20px]">{item.name}</p>
            <p className="flex justify-center items-center">
              {TechLevelDots(item.level)}
            </p>
          </div>
        ))}
      </div>

      <h1 className="text-[30px] my-4">🔧 Backend</h1>
      <div className="grid grid-cols-2 gap-8 mb-6">
        {backend.map((item) => (
          <div key={item.name} className="flex flex-row gap-4 w-full min-w-[200px] max-w-[300px] justify-between">
            <p className="text-[20px]">{item.name}</p>
            <p className="flex justify-center items-center">
              {TechLevelDots(item.level)}
            </p>
          </div>
        ))}
      </div>

      <h1 className="text-[30px] my-4">🗄️ Database</h1>
      <div className="grid grid-cols-2 gap-8 mb-6">
        {database.map((item) => (
          <div key={item.name} className="flex flex-row gap-4 w-full min-w-[200px] max-w-[300px] justify-between">
            <p className="text-[20px]">{item.name}</p>
            <p className="flex justify-center items-center">
              {TechLevelDots(item.level)}
            </p>
          </div>
        ))}
      </div>

      <h1 className="text-[30px] my-4">⚙️ Tools / Infrastructure</h1>
      <div className="grid grid-cols-2 gap-8 mb-6">
        {tools.map((item) => (
          <div key={item.name} className="flex flex-row gap-4 w-full min-w-[200px] max-w-[300px] justify-between">
            <p className="text-[20px]">{item.name}</p>
            <p className="flex justify-center items-center">
              {TechLevelDots(item.level)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
