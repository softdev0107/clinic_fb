<template>
  <div class="progress-container">
    <div class="progress-bar-title">
      <span>Weekly progress</span>
      <span>{{progress}}%</span>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{'width': progress + '%'}" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: ['progress']
}
</script>
<style scoped>
  .progress-container {
    margin: 0 5px 10px 5px;
  }
  .progress {
    height: 4px;
  }
  .progress-bar-title span:first-child {
    font-size: 14px;
    font-weight: 500;
    color: rgb(114, 114, 114);
  }
  .progress-bar-title span:last-child {
    float: right;
    font-size: 12px;
    color: blue;
  }
</style>
