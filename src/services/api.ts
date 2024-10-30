import axios from "axios";
import { Image } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const myApiKey = "e8QJlpvoYOkzAb4I8erJIzKcbb52FDDff3lklNTfXzA";

type FetchImagesResponse = {
  results: Image[];
  total: number;
  total_pages: number;
};

export const fetchImages = async (
  page: number,
  query: string
): Promise<FetchImagesResponse> => {
  const { data } = await axios.get<FetchImagesResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: myApiKey,
      orientation: "landscape",
    },
  });

  return data;
};
