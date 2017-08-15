<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    props: ['workHistory'],
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