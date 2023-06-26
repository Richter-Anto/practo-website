import AllPages from "./AllPages.vue";
import VueRouter from 'vue-router'

 
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: AllPages,
    },
    {
      path: "/index", 
      component: AllPages,
    },
  ],
});





