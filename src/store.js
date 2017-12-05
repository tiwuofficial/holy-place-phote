import Vue from 'vue';
import Vuex from 'vuex';
import gallery from './assets/gallery.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gallery,
  },
});
