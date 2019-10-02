import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import HelloWorld from '@/components/HelloWorld'
import MainFilters from '@/components/MainFilters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      components: {default: Header,
      	content: MainFilters   // The content to show
      }
    }
  ]
})
