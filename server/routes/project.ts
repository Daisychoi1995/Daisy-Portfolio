import { PrismaClient } from '@prisma/client'
import camelcaseKeys from 'camelcase-keys'
import express from 'express'

const router = express.Router()
const prisma = new PrismaClient

router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany()
    res.json(camelcaseKeys(projects, { deep: true }))
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" })
  }
})

export default router