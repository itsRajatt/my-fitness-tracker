import axios from "axios";
import { OPTIONS } from "../configs/rapidApi";

export async function fetchExercises() {
  try {
    const response = await axios.request(OPTIONS);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
