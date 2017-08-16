<template>
  <div id="editor">
    <nav>
        <ol>
          <li v-for="i in [0, 1, 2, 3, 4, 5]"
              v-bind:class="{active: currentTab === i}"
              v-on:click="currentTab = i"
              >
            <svg class="icon ">
                <use v-bind:xlink:href="`#${icons[i]}`"></use>
            </svg>
          </li>
        </ol>
    </nav>
    <ol class="pannes">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor v-bind:profile="resume.profile" />
      </li>

      <li v-bind:class="{active: currentTab === 1}">
        <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company: '公司', duration: '工作时间', content: '工作内容'}" v-bind:title="'工作经历'"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name: '项目名称', duration: '项目时间', content: '项目内容'}" title="项目经历" />
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school: '学校', duration: '时间', degree: '学位'}" title="学习经历" />
      </li>

      <li v-bind:class="{active: currentTab === 4}">
        <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name: '奖励详情'}" title="获奖记录" />
      </li>
      <li v-bind:class="{active: currentTab === 5}">
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
    props: ['resume'],
    data() {
      return {
        currentTab: 0,
        icons: ['icon-ionc--', 'icon-work', 'icon-project', 'icon-book', 'icon-iocn_hobby', 'icon-phone'],

      }
    },
    // created()函数是组件被创建之后的回调函数
    created() {

    },
  }
</script>

<style lang="scss">
  #editor{
    min-height: 100px;
    display: flex;
    > nav {
      background-color: #000;
      width: 80px;
      > ol > li {
        padding: 16px 0;
        text-align: center;
        > .icon {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        &.active {
          background-color: #fff;
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
        .el-icon-circle-close{
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
  }

</style>
