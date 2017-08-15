<template>
  <div id="preview">
    <h1>{{resume.profile.name}}</h1>
    <p>{{resume.profile.city}} | {{resume.profile.birth}}</p>
  </div>
</template>

<script >
  export default {
    props: ['resume']
  }
</script>
<style>
  #preview{
    border: 1px solid yellow;
    min-height: 100px;
  }
</style>
