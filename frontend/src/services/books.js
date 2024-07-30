import axios from '../utils/axiosInstance.js'
export const createBook = async (book) => {
    const result = await axios.post("/books", { ...book });
    return result;
  };

export const getAllBooks = async () => {
    const result = await axios.get("/books");
    return result.data;
  };