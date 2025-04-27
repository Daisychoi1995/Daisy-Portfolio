import { PrismaClient } from '@prisma/client'
import express from 'express'
import snakecaseKeys from 'snakecase-keys'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  try {
    const result = await prisma.messageExample.findMany()
    // const messageExample = result.map(({ created_at, ...rest }) => ({
    //   ...rest,
    //   createdAt: created_at
    // }))
    res.json(result)
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" })
  }
})

router.post('/', async (req, res) => {
  try {
    const newMessages = snakecaseKeys(req.body, { deep: true })
    const savedMessage = await prisma.message.createMany({
      data: newMessages
    })
    res.status(201).json({ message: "Messages created successfully!" })
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" })
  }

})

export default router