import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;

Vue.prototype.globalData = {
    name: "globalData",
    isShowMask: false
};
new App().$mount();
