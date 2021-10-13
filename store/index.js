export const state = () => ({
  currentComponent: "Home",
  piesocket: [],
  websocket: []
});

export const getters = {};

export const mutations = {
  setCurrentComponent(state, payload) {
    state.currentComponent = payload;
  },
  addItemToLog(state, payload) {
    state[payload.dest].push(payload.data);
  },
  clearLog(state, payload) {
    state[payload] = [];
  }
};

export const actions = {};