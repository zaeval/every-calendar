
import Vue from 'vue';
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    default:500,
    mobile: 800,
    tablet: 1100,
    laptop: 1440,
    desktop: Infinity,
  }
})

export default({
   
});