export const setToken = (state, payload) => {
  state.token = payload.token;
  state.Name = payload.Name;
  state.id = payload.id;
  localStorage.setItem("jwt-token", payload.token);
};

export const logout = (state) => {
  state.token = null;
  state.Name = null;
  state.id = null;
  localStorage.removeItem("jwt-token");
};
