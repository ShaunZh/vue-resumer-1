<template>
  <div id="topbar">
    <div class="logo">
      Resumer
    </div>
    <div class="actions">
      <!-- 如果登录了 显示账户信息 -->
      <div v-if="logined" class="userActions">
        <span>您好，{{user.username}}</span>
        <a class="button is-info is-outlined" href="#">登出</a>
      </div>

      <!-- 如果没有登录 则提示注册/登录信息 -->
      <div v-else class="userActions">
        <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <!--这里面的内容将会放到MyDialog的slot位置-->
          <SignUpForm @success="login($event)" />
        </MyDialog>
        <a class="button is-primary">登录</a>
      </div>

      <a class="button is-primary is-outlined">保存</a>
      <a class="button is-info is-outlined" v-on:click="preview">预览</a>
    </div>
  </div>
</template>


<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'

  export default {
    name: 'Topbar',
    data() {
      return {
        signUpDialogVisible: false
      }
    },
    components: {
      MyDialog, SignUpForm
    },
    methods: {
      preview() {
         this.$emit('preview');
      },
      login(user) {
        this.signUpDialogVisible = false;
        this.$store.commit('setUser', user);
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      logined() {
        return this.user.id;
      }
    }

  }
</script>

<style lang ="scss">
  #topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;

    padding: 16px;
  }

  /*.button {*/
    /*text-decoration: none;*/
    /*display:inline-flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*vertical-align: middle;*/
    /*&:hover {*/
       /*box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);*/
     /*}*/
  /*}*/

  .actions{

  }
</style>
