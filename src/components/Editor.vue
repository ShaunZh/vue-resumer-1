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
      </li>

      <li v-bind:class="{active: currentTab === 1}">
        <WorkHistoryEditor v-bind:workHistory="workHistory" />
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
    </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import WorkHistoryEditor from './WorkHistoryEditor'
  export default {
    components: { ProfileEditor , WorkHistoryEditor},
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
