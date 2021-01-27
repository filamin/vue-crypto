import Vue from "vue";
import Vuex from "vuex";
import CoinsDataService from "../services/CoinsDataService";
import { displayCoins, displayChanges } from "../utils/display";
import sleeper from "../utils/sleeper";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
  },
  actions: {
    getCoins({ commit }) {
      CoinsDataService.getAllCoins()
        .then((res) => {
          const structuredCoins = displayCoins(res.data);
          commit("SET_COINS", structuredCoins);
        })
        .catch((err) => console.log(err));
    },
    getCoinChanges({ commit }, { id }) {
      CoinsDataService.getCoinChanges(id)
        .then((result) => {
          const changes = displayChanges(result.data);
          commit("SET_CHANGES", { changes, id });
        })
        .then(sleeper(2000))
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    SET_COINS(state, coins) {
      state.coins = coins;
    },
    SET_CHANGES(state, { changes, id }) {
      state.coins.find((coin) => coin.id === id).changes = changes;
      console.log(id);
    },
  },
  getters: {
    all: (state) => state.coins,
    changes: (state) => (id) => {
      return state.coins.find((coin) => {
        if (coin.id === id) return coin.changes;
      });
    },
  },
});
