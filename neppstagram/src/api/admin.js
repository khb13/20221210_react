import axios from "axios";

export const postUser = async (form) => {
  try {
    const result = await axios.post("http://101.101.218.43/users", {
      ...form,
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};
