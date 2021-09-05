export const token = (state) => {
  return state.token;
};
export const Name = (state) => {
  return state.Name;
};
export const id = (state) => {
  return state.id;
};
export const isAuthenticated = (_, getters) => {
  return Boolean(getters.token);
};
