import cors from 'cors'
import express from 'express'
import projectRoute from './routes/project'

const PORT = process.env.PORT || 5000
const app = express()


app.use(cors())

app.use(express.json())

app.use('/api/v1/projects', projectRoute)

app.listen(PORT, () => {
  console.log('API server listening on port', PORT)
})

export default app