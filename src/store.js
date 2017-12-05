import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageList: require.context('./assets/img/photo', true, /\.jpg$/),
    topImage: require.context('./assets/img/', false, /\.jpg$/),
  },
});
