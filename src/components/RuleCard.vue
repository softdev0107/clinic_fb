<template>
  <div class="card-container">
    <div class="card-title">
      <p>{{rule.titleType}}</p>
      <h4>{{rule.title}}</h4>
    </div>
    <div class="card-content">
      <p>Members</p>
      <p class="circle-mark mt-2">+{{rule.memberCounts}}</p>
    </div>
    <div>
      <progress-bar :progress="rule.progress"></progress-bar>
      <a style="margin-top: 10px" href="">Edit</a>
    </div>
  </div>
</template>
<script>
import ProgressBar from './ProgressBar.vue'
export default {
  name: 'RuleCard',
  components: { ProgressBar },
  props: ['rule']
}
</script>
<style scoped>
  .card-container {
    width: 270px;
    height: 250px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    padding: 20px;
    margin-right: 10px;
  }
  .card-title {
    margin: 5px 0px;
  }
  .card-title p {
    font-size: 12px;
    color: rgb(182, 182, 182);
  }
  .card-title h4{
    font-size: 18px;
  }
  .card-content {
    margin: 20px 0;
  }
  .card-content p.circle-mark {
    width: 35px;
    height: 35px;
    border: 1px solid rgb(155, 155, 155);
    background-color: rgb(155, 155, 155);
    border-radius: 100%;
    text-align: center;
    line-height: 30px;
  }
</style>
