// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入CSS前端套件到vue專案的entry point
import {BootstrapVue, IconsPlugin} from "bootstrap-vue"
// 引入套件樣式，當你安裝完套件，就可以直接以套件名稱到他資料夾下取得一些static resources靜態資源
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
// 實際註冊/安裝兩modules到vue之中(實例化)
// 其實他可以允許在個別component中去加載，這種加載方式屬於global全域性的
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
