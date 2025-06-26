import axios from "axios";

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: {
    limit: "10",
    offset: "0",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

const getData = async (req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
};

export { getData };
