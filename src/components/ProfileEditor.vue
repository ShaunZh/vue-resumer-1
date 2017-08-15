<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="姓名">
          <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="城市">
          <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
          <el-input v-model="profile.birth"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    // 这句话表示：我允许从外面接受一个名为profile的变量
    // 就是别的组件向本组件传递数据
    props: ['profile']
  }
</script>