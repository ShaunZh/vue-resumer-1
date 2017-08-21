<template>
  <div id="topbar">
    <div class="logo">
      Resumer
    </div>
    <div class="actions">
      <!-- 如果登录了 显示账户信息 -->
      <div v-if="logined" class="userActions">
        <span class="welcome">您好，{{user.username}}</span>
        <a class="button is-info is-outlined" href="#" @click.prevent="signOut">登出</a>
      </div>

      <!-- 如果没有登录 则提示注册/登录信息 -->
      <div v-else class="userActions">
        <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
        <a class="button is-primary" @click.prevent="signInDialogVisible = true">登录</a>
      </div>
      <a class="button is-primary is-outlined">保存</a>
      <a class="button is-info is-outlined" v-on:click="preview">预览</a>
    </div>

    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <!--这里面的内容将会放到MyDialog的slot位置-->
      <SignUpForm @success="signIn($event)" />
    </MyDialog>

    <MyDialog title="登录" :visible="signInDialogVisible"
              @close="signInDialogVisible = false" >
      <SignInForm />
    </MyDialog>
  </div>
</template>


<script>
  import MyDialog from './MyDialog'
  import AV from '../lib/leancloud'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'

  export default {
    name: 'Topbar',
    data() {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false
      }
    },
    components: {
      MyDialog, SignUpForm, SignInForm
    },
    methods: {
      preview() {
         this.$emit('preview');
      },
      signOut() {
        AV.User.logOut();
        this.$store.commit('removeUser');

      },
      signIn(user) {
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
