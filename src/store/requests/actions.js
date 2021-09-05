import axios from "axios";
import keys from "../../../keys/keys.dev";

export const getallZayavka = async ({ commit }) => {
  try {
    const data = await axios.get(`${keys.BASE_URL}/getallZayavka`);
    commit("setZayavki", data);
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};
