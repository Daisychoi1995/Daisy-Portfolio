import { useState } from 'react'
import { useAddMessage } from '../hooks/useMessages'
import { MessageData } from '../models/Messages'

export default function MessageForm() {
  const [formData, setFormData] = useState<MessageData>({
    name: '',
    contact: '',
    description: '',
    createdAt: new Date(),
  })
  const addMessage = useAddMessage()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formData.name || !formData.contact || !formData.description) {
      return alert('Please fill up the form')
    }
    const form: MessageData = {
      ...formData,
      createdAt: new Date(),
    }
    addMessage.mutate(form)
    alert('Sent Message to Daisy! Thanks for your message!')
    setFormData({
      name: '',
      contact: '',
      description: '',
      createdAt: new Date(),
    })
  }

  return (
    <div className="w-full h-full py-10 rounded bg-white overflow-auto shadow">
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 px-10 pt-10">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        className="border border-gray-400 rounded-[20px] px-4 py-2 w-full"
      />
  
      <input
        type="text"
        name="contact"
        required
        placeholder="Contact"
        value={formData.contact}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, contact: e.target.value }))
        }
        className="border border-gray-400 rounded-[20px] px-4 py-2 w-full"
      />
  
      <textarea
        name="description"
        required
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
        rows={5}
        className="border border-gray-400 rounded-[20px] px-4 py-2 w-full resize-none overflow-auto"
      />
  
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-[25px] font-bold rounded-full shadow-md hover:bg-blue-600 transition"
        >
          ↑
        </button>
      </div>
    </form>
  </div>
  
  )
}
