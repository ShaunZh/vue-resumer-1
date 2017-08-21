<template>
  <div id="preview" >
    <h3 class="title is-3">{{resume.profile.name  || "请填写姓名"}}</h3>
    <h4 class="title is-4">{{resume.profile.title || "请输入职位"}}</h4>
    <p>{{resume.profile.city || "请填写城市"}} | {{resume.profile.birth || "请填写出生年月"}}</p>
    <hr>
    <section v-if="filter(resume.workHistory).length > 0">
      <h3 class="title is-4 tag">工作经历</h3>
      <ul>
          <li v-for="work in filter(resume.workHistory)" class="part">
            <p class="is-large">{{work.company}}  {{work.duration}}</p>
            <hr>
            <p>{{work.content}}</p>
          </li>
      </ul>
    </section>

    <section v-if="filter(resume.projects).length > 0">
      <h3 class="title is-4 tag">项目经历</h3>
      <ul>
          <li v-for="project in filter(resume.projects)">
            <p class="is-large">{{project.name}} {{project.duration}}</p>
            <p>{{project.content}}</p>
            <hr>
          </li>
      </ul>
    </section>

    <section v-if="filter(resume.studyHistory).length > 0">
      <h3 class="title is-4 tag">学习经历</h3>
      <ul>
          <li v-for="study in filter(resume.studyHistory)">
            <p class="is-large">{{study.school}} {{study.duration}}</p>
            <p>{{study.degree}}</p>
            <hr>
          </li>
      </ul>
    </section>
    <section v-if="filter(resume.awards).length > 0">
      <h3 class="title is-4 tag">获奖情况</h3>
      <ul>
          <li v-for="award in filter(resume.awards)">
            {{award.name}}
            <hr>
           </li>
      </ul>
    </section>
    <section v-if="!isEmpty(resume.contact)">
      <h3 class="title is-4 tag">联系方式</h3>
      <ul>
          <li>{{resume.contact.phone || "请输入电话号码"}}</li>
          <li>{{resume.contact.email || "请输入邮箱"}}</li>
          <li>{{resume.contact.wechat || "请输入微信"}}</li>
          <li>{{resume.contact.qq || "请输入QQ"}}</li>
      </ul>
    </section>
  </div>
</template>

<script >
  export default {
    methods: {
      filter(array) { // 找出非空对象
        return array = array.filter( item => !this.isEmpty(item))
      } ,
      isEmpty(object) { // 只要有一个value不是falsy，就返回false
        let empty = true;
        for (let key in object) {
          if (object[key]) {
            empty = false;
            break;
          }
        }
        return empty;
      }
    },
    computed: {
      resume() {
        console.log('ahhah')
        return this.$store.state.resume;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/less">
  #preview{
    padding: 20px;
    border: 1px solid yellow;
    min-height: 100px;

    .part {
      margin-bottom: 15px;
    }
  }
</style>
