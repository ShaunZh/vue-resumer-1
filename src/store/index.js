import Vuex from 'vuex'
import  Vue from 'vue'

// const store = new Vuex.Store({
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    count: 0,
    selected: 'profile',

    icon: [
      'id', 'work', 'book', 'heart', 'cup', 'phone'
    ],

    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'studyHistory', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      workHistory: [
        {company: '', duration: '', content: ''},
      ],
      studyHistory: [
        {school: '', duration: '', degree: ''}
      ],
      projects: [
        {name: '', duration: '', content: ''}
      ],
      awards: [
        {name: ''}
      ],
      contact: {
        phone: '', email: '', wechat: '', qq: ''
      }
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    switchTab(state, payload) {
      state.selected = payload
    }
  }
})
