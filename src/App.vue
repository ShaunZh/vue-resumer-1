<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>


<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  export default {
    components: {
      "Topbar": Topbar,
      "Editor": Editor,
      "Preview": Preview,

    }
  }
</script>

<style lang="scss">

html, body, #app {
  height: 100%;
  overflow: hidden;
}
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topbar {
<<<<<<< HEAD
  position: relative; z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
 }
=======
}
>>>>>>> 8e8c42ca1bc0f2410dda339f6de8a34161c21b09

main{
  display: flex;
  flex: 1;
  background: #DDD;

  > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px ;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  > .preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
}

</style>
