import axios from "axios";
import { error } from "../../utils/error.js";
import keys from "../../../keys/keys.dev";
export const login = async ({ commit, dispatch }, formData) => {
  try {
    const { data } = await axios.post(`${keys.BASE_URL}/admin/login`, {
      ...formData,
    });
    const token = data.token;
    const Name = data.Name;
    const id = data.id;
    commit("setToken", { token, Name, id });
    commit("clearMessage", null, { root: true });
  } catch (e) {
    dispatch(
      "setMessage",
      {
        value: error(e.response.data.message),
        type: "danger",
      },
      { root: true }
    );
    throw new Error();
  }
};

export const createUser = async ({ dispatch }, formData) => {
  try {
    const { data } = await axios.post(`${keys.BASE_URL}/admin/create`, {
      ...formData,
    });
    console.log(data);
  } catch (e) {
    dispatch(
      "setMessage",
      {
        value: error(e.response.message),
        type: "danger",
      },
      { root: true }
    );
    throw e;
  }
};
