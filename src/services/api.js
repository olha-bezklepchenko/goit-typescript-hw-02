import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const myApiKey = "e8QJlpvoYOkzAb4I8erJIzKcbb52FDDff3lklNTfXzA";

export const fetchImages = async (page, query) => {
  const { data } = await axios.get("/search/photos", {
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
