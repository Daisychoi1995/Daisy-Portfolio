import axios from 'axios'
import { Message, MessageData } from '../models/Messages.ts'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function getMessages(): Promise<Message[] | undefined> {
  try {
    const res = await axios.get(`${baseUrl}/api/v1/messages`)
    return res.data as Message[]
  } catch (error) {
    console.error('Error fetching projects data:', error)
  }
}

export async function addMessage(newMessage: MessageData) {
  try {
    const res = await axios.post(`${baseUrl}/api/v1/messages`, newMessage)
    return res.data
  } catch (error) {
    console.error('Error fetching projects data:', error)
  }
}
