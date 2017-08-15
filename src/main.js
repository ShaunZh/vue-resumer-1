// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'

Vue.config.productionTip = false


// 这里定义了两个全局组件 Hello 和 Jack
Vue.component('Hello', Hello)
Vue.component('Jack', {
  template: '<p> I am Jack {{name}}</p>',
  data() {
    return {
      name: 'Jack Ma ge'
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
