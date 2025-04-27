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
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
  <div className="w-full h-full flex flex-row sm:flex-row sm:items-center sm:justify-between">
    <div className="relative w-full sm:w-2/3">
      <div className="mb-4 sm:mb-0 sm:flex sm:gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
           className="border-1 border-gray-400 rounded-[20px] px-4 py-2 w-full sm:w-auto"
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
          className="border-1 border-gray-400 rounded-[20px] px-4 py-2 w-full sm:w-auto"
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
        rows={2}
        className="border border-gray-400 rounded-[20px] px-4 py-2 w-full resize-none max-h-[4.5rem] sm:max-h-[6rem] overflow-auto mt-2"
      />
    </div>

    <div className="sm:absolute sm:right-16 sm:bottom-4 mt-4 sm:mt-0">
      <button
        type="submit"
        className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-[25px] font-bold rounded-full shadow-md hover:bg-blue-600 transition"
      >
        ↑
      </button>
    </div>
  </div>
</form>

  )
}
