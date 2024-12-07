import axios from "axios";

export const getAccountInfo = async (token) => {
  try {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
