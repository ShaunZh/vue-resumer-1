<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <!--<div class="modal">-->
        <!--<div class="modal-background"></div>-->
        <!--<div class="modal-content">-->
          <!-- Any other Bulma elements you want -->
          <header>
            {{title}}
            <span class="close" @click="close">X</span>
          </header>
          <main>
            <!--如果在slot中添加内容，那么表示在调用该组件时，如果该组件没有内容，那么就将slot中的内容放到其中-->
            <slot>哈哈哈</slot>
          </main>
        <!--</div>-->
        <!--<button class="modal-close is-large" aria-label="close"></button>-->
      <!--</div>-->
    </div>

  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/less">
  .wrapper {
    position: fixed;
    background: hsla(0, 0%, 0%, 0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items:center;
  }

  .dialog {
    background: #fff;
    min-height: 4em;
    min-width: 10em;
    > header {
      padding: 16px;
      display: flex;
      justify-content: space-between;
    }
    > main {
      padding: 16px;
    }
  }
</style>
