import { apiClient } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query"
import type { AxiosError } from "axios";

interface PokeAPIResponse {
  count: number;
  next: string;
  previous: string;
}

interface PokemonBasicInfo {
  name: string;
  url: string;
}

interface PokeAPIListResponse extends PokeAPIResponse {
  results: Array<PokemonBasicInfo>
}

export const useGetPokemonList = () => {
  const { data: response } = useQuery<PokeAPIListResponse, AxiosError>({
    queryKey: ["pokemonList"],
    queryFn: async () => {
        const response = await apiClient.get<PokeAPIListResponse>("/pokemon");
        return response.data
    }
  })

  return {
    data: response?.results
  }
}