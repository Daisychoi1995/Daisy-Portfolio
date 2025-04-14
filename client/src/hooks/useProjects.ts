import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/projects";

export function useGetProjects () {
  const query = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })
  return query
}
