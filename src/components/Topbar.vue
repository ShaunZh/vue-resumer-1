<template>
  <div id="topbar">
    <div class="logo">
      Resumer
    </div>
    <div class="actions">
      <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <!--这里面的内容将会放到MyDialog的slot位置-->
        我就是slot内容
      </MyDialog>
      <a class="button is-primary">登录</a>
      <a class="button is-primary is-outlined">保存</a>
      <a class="button is-info is-outlined" v-on:click="preview">预览</a>
    </div>
  </div>
</template>


<script>
  import MyDialog from './MyDialog'

  export default {
    name: 'Topbar',
    data() {
      return {
        signUpDialogVisible: false
      }
    },
    components: {
      MyDialog
    },
    methods: {
      preview() {
         this.$emit('preview');
      }
    },

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

  .actions > a{

  }
</style>
