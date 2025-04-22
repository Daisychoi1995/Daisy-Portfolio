import { useState } from "react"
import { useAddMessage } from "../hooks/useMessages"
import { MessageData } from "../models/Messages"

export default function MessageForm() {
  const [formData, setFormData] = useState<MessageData>({
    name: '',
    contact: '',
    description: '',
    createdAt: new Date()
  })
  const addMessage = useAddMessage()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if(!formData.name || !formData.contact || !formData.description) {
        return alert('Please fill up the form')
      }
      const form: MessageData = {
        ...formData, createdAt: new Date()
      }
      addMessage.mutate(form)
      setFormData({
        name: '',
        contact: '',
        description: '',
        createdAt: new Date()
      })
    }
  
  return(
    <form onSubmit={handleSubmit}>
          <input type='text' name='name' required placeholder='Name' value={formData.name} onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))} />
          <input type='text' name='contact' required placeholder='Contact' value={formData.contact} onChange={e => setFormData(prev => ({ ...prev, contact: e.target.value }))}/>
          <input type='text' name='description' required placeholder='Description' value={formData.description} onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}/>
          <button type='submit'>sub</button>
        </form>
  )
}