<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  export default {
    data() {
      return {
        previewMode: false,
        resume: {
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
        }
      }
    },
    methods: {
      preview() {
        console.log('hhh');
        this.previewMode = true;
      },
      exitPreview() {
        this.previewMode = false;
      }
    },
    components: {
      "Topbar": Topbar,
      "Editor": Editor,
      "Preview": Preview,

    },

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
  position: relative; z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}

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

.previewMode > #topbar {
  display: none;
}
.previewMode #editor {
  display: none;
}

.previewMode #preview {
  max-width: 800px;
  margin: 32px auto;
}

#exitPreview {
  display: none;
}
.previewMode #exitPreview {
  display: inline-block;
  position: fixed;
  right: 10px;
  bottom: 10px;

}
</style>
