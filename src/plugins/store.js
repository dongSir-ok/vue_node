/*状态管理-Vuex */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from '../store/actions';
import mutations from '../store/mutations';
import state from '../store/state';
import getters from '../store/getters';

export default new Vuex.Store({
    actions,mutations,state,getters
})
