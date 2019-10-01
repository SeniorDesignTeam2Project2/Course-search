import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      components: {default: Header,
      	content: HelloWorld   // The content to show
      }
    }
  ]
})
