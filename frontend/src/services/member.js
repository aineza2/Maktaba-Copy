import axios from "../utils/axiosInstance.js";
export const createMember = async (member) => {
  const result = await axios.post("/members", { ...member });
  return result;
};

export const getAllMembers = async () => {
  const result = await axios.get("/members");
  return result.data;
};
