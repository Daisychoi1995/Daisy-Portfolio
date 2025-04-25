import cors from 'cors'
import express from 'express'
import projectRoute from './routes/project.js'
import messageRoute from './routes/message.js'

const PORT = process.env.PORT || 5000
const app = express()

const allowedOrigins = [
  'https://daisy-portfolio-4fuhpugy4-daisychoi1995s-projects.vercel.app',
  'https://daisy-portfolio-g97xmi3hs-daisychoi1995s-projects.vercel.app',
  'https://daisy-portfolio-production.up.railway.app',
  'http://localhost:5173',
]
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: 'GET,POST,PUT,DELETE',
}))

app.use(express.json())

app.use('/api/v1/projects', projectRoute)
app.use('/api/v1/messages', messageRoute)

app.listen(PORT, () => {
  console.log('API server listening on port', PORT)
})

export default app
