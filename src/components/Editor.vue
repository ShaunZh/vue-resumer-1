<template>
  <div id="editor">
    <nav>
        <ol>
          <!--<li v-for="i in [0, 1, 2, 3, 4, 5]"-->
              <!--v-bind:class="{active: currentTab === i}"-->
              <!--v-on:click="currentTab = i"-->
              <!--&gt;-->
            <!--<svg class="icon ">-->
                <!--<use v-bind:xlink:href="`#${icons[i]}`"></use>-->
            <!--</svg>-->
          <!--</li>-->
          <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
            <svg class="icon">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
          </li>
        </ol>
    </nav>
    <ol class="pannes">
      <li v-bind:class='{active: selected === "profile"}'>
        <ProfileEditor v-bind:profile="resume.profile" />

      </li>

      <li v-bind:class='{active: selected === "workHistory"}'>
        <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company: '公司', duration: '工作时间', content: '工作内容'}" v-bind:title="'工作经历'"/>
      </li>
      <li v-bind:class='{active: selected === "projects"}'>
        <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name: '项目名称', duration: '项目时间', content: '项目内容'}" title="项目经历" />
      </li>
      <li v-bind:class='{active: selected === "studyHistory"}'>
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school: '学校', duration: '时间', degree: '学位'}" title="学习经历" />
      </li>

      <li v-bind:class='{active: selected === "awards"}'>
        <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name: '奖励详情'}" title="获奖记录" />
      </li>
      <li v-bind:class='{active: selected === "contacts"}'>
        <h2>联系方式</h2>
          <el-form>
            <el-form-item label="手机">
                <el-input v-model="resume.contact.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="resume.contact.email"></el-input>
            </el-form-item>
            <el-form-item label="微信">
                <el-input v-model="resume.contact.wechat"></el-input>
            </el-form-item>
            <el-form-item label="qq">
                <el-input v-model="resume.contact.qq"></el-input>
            </el-form-item>
          </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor'
   export default {
    components: { ProfileEditor , ArrayEditor },
//    data() {
//      return {
//        selected: 'profile',
//
//        icon: [
//          'id', 'work', 'book', 'heart', 'cup', 'phone'
//        ],
//        config: [
//          { field: 'profile', icon: 'id' },
//          { field: 'workHistory', icon: 'work' },
//          { field: 'studyHistory', icon: 'book' },
//          { field: 'projects', icon: 'heart' },
//          { field: 'awards', icon: 'cup' },
//          { field: 'contacts', icon: 'phone' },
//        ],
//      }
//    },
     computed: {
       selected:{
         get() {
           return this.$store.state.selected;
         },
         set(value) {
           return this.$store.commit('switchTab', value);
         }
       },
       resume() {
         return this.$store.state.resume;
       }
     },
     methods: {
     },
    // created()函数是组件被创建之后的回调函数
    created() {

    },

  }
</script>

<style lang="scss" rel="stylesheet/less">

  #editor{
    min-height: 100px;
    display: flex;
    > nav {
      background-color: #000;
      width: 80px;
      > ol > li {
        padding: 16px 0;
        text-align: center;
        &.active {
          background: #fff;
          > .icon {
            fill: #000;
          }
        }
      }
    }
    > .pannes {
      flex: 1;
      .container {
        position: relative;
        .el-icon-circle-close {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      > li {
        height: 100%;
        overflow: auto;
        display: none;
        padding: 32px;
        &.active {
          display: block;
        }
      }
    }
    svg.icon {
      width: 32px;
      height: 32px;
    }
  }

</style>
