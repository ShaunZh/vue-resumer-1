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

        <ProfileEditor v-bind:profile="profile" />

        <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form> -->
      </li>

      <li v-bind:class="{active: currentTab === 1}">
        <h2>学习经历</h2>
        <el-form>
          <!-- 这个(work, index) 是vue定义的语法 -->
          <div class="container" v-for="(work, index) in workHistory">
            <el-form-item label="公司">
              <el-input v-model="work.company"></el-input>
            </el-form-item>

            <el-form-item label="工作内容">
              <el-input v-model="work.content"></el-input>
            </el-form-item>
            <!-- 这里传的是一个removeWorkHistory(index)函数调用，而在下面的addWorkHistory 传的是函数名，这是Vue自己支持的两种调用方法-->
            <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
          </div>
          <hr>
          <el-button type="primary" v-on:click="addWorkHistory()">添加一项</el-button>
        </el-form>
      </li>

      <li v-bind:class="{active: currentTab === 2}">
        <h2>工作经历</h2>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <h2>爱好</h2>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h2>不知道</h2>
      </li>

      <!-- <li v-for="i in [0, 1, 2, 3, 4, 5]"
          v-bind:class="{active: currentTab === i}"
          >
          Tab {{i + 1}}
      </li> -->
    </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
  export default {
    components: { ProfileEditor },
    data() {
      return {
        currentTab: 0,
        icons: ['icon-ionc--', 'icon-phone', 'icon-work', 'icon-project', 'icon-book', 'icon-iocn_hobby'],
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory: [
          {company: '', content: ''},
        ]
      }
    },
    // created()函数是组件被创建之后的回调函数
    created() {

    },

    methods: {
      addWorkHistory() {
        this.workHistory.push({
          company: '', content: ''
        })
      },
      removeWorkHistory(index) {
        this.workHistory.splice(index, 1)
      }
    }




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
