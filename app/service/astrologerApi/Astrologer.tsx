import api from "../axiosInstance";


// ✅ GET all astrologers
export const getAstrologers = async () => {
  const { data } = await api.get("/astrologers");
  return data;
};

// ✅ DELETE all astrologers
export const deleteAllAstrologers = async () => {
  const { data } = await api.delete("/astrologers/deleteall");
  return data;
};

// ✅ Create astrologer
export const createAstrologer = async (payload: any) => {
  const { data } = await api.post("/astrologers/create", payload);
  return data;
};
