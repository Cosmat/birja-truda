export const setZayavki = (state, payload) => {
  state.zayavki = Array.from(payload.data.reverse());
};
