import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addMessage, getMessages } from '../api/message'
import { MessageData } from '../models/Messages'

export function useGetMessages() {
  const query = useQuery({
    queryKey: ['messages'],
    queryFn: getMessages,
  })
  return query
}

export function useAddMessage() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (message: MessageData) => {
      return await addMessage(message)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] })
    },
  })
  return mutation
}
