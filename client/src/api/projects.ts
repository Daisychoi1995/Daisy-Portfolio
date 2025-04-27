import axios from 'axios'
import { Project } from '../models/Projects.ts'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export async function getProjects (): Promise<Project[] | undefined> {
  try {
    const res = await axios.get(`${baseUrl}/api/v1/projects`)
    // console.log(res.data)
      return res.data as Project[]
  } catch (error) {
    console.error('Error fetching projects data:', error)
  }
}