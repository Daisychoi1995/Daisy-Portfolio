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
    <form onSubmit={handleSubmit}>
        <div className="w-full h-full mb-4 flex flex-row">
        <div className='relative'>
          <div className='mb-2'>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border-1 border-gray-400 rounded-[20px] px-4 mr-4 py-1"
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
              className="border-1 border-gray-400 rounded-[20px] px-4 py-1"
            />
          </div>
          <textarea
            name="description"
            required
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={3}
            className="border border-gray-400 rounded-[20px] px-4  pt-2 w-full max-h-[4.5rem] resize-none overflow-auto"
          />
        </div>
        <div className='absolute right-20 bottom-10'>
          <button
            type="submit"
            className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-[25px] font-bold rounded-full shadow-md"
          >
            ↑
          </button>
        </div>
    </div>
      </form>
  )
}
