import { PrismaClient } from '@prisma/client'
import express from 'express'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  try {
    const result = await prisma.project.findMany()
    // console.log('result', result)
    // const projects = result.map(({ image_url, tech_stack, ...rest }) => ({
    //   ...rest,
    //   imageUrl: image_url,
    //   techStack: tech_stack
    // }))
    // console.log('working?')
    // console.log(projects)
    res.json(result)
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" })
  }
})

export default router