import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { apiClient } from "../../api/apiClient";

export const test = 1;

export const useGetPokemonList = () => {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => {
    const response = await apiClient.get("/pokemon");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    }
  })
}