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
        { title: '个人信息', field: 'profile', icon: 'id' },
        { title: '工作经历', field: 'workHistory', icon: 'work' },
        { title: '学习经历', field: 'studyHistory', icon: 'book' },
        { title: '项目经历', field: 'projects', icon: 'heart' },
        { title: '获奖经历', field: 'awards', icon: 'cup' },
        { title: '联系方式', field: 'contact', icon: 'phone' },
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
    switchTab(state, payload) {
      state.selected = payload;
    },
    updateResume(state, {field, subfield, value}) {
      console.log(field);
      console.log(subfield)
      console.log(value)
      state.resume[field][subfield] = value;
    }
  }
})
