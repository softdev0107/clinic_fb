<template>
  <div class="switchbutton-container">
    <div class="switch-label">
      <img :src="require('../assets/icons/' + switchData.icon)" width="20" height="20" alt="">
      <span>{{switchData.label}}</span>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="email-noti-check" checked>
    </div>
  </div>
</template>
<script>
export default {
  props: ['switchData']
}
</script>
<style scoped>
  .switchbutton-container {
    display: flex;
    width: 60%;
    padding: 10px;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .switch-label {
    flex: 1;
  }
  .switch-label img {
    margin: 0 5px;
  }
  .switch-label span {
    margin-left: 10px;
    font-size: 14px;
  }
  .form-check.form-switch {
    float: right;
  }
  .form-check-input {
    height: 20px;
    width: 5em;
  }
  .form-switch .form-check-input{
    width: 2.5em;
  }

  @media screen and (max-width: 768px) {
    .switchbutton-container {
      width: 100%;
    }
  }
</style>
