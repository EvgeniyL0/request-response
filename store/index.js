export const state = () => ({
  currentComponent: "Home"
});

export const getters = {};

export const mutations = {
  setCurrentComponent(state, payload) {
    state.currentComponent = payload;
  }
};

export const actions = {};