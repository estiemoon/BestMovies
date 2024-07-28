import { Award } from "../../hooks/useAward";
import { httpClient } from "./http";

export const fetchAwards = async () => {
  const response = await httpClient.get<Award[] | null>(`/awards`);
  
  return response.data
} 

