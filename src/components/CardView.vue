<template>
  <div class="card-container">
    <div class="card-title">
      <p>FACULTY</p>
      <h4>Unvaccinated testing</h4>
    </div>
    <div class="card-content">
      <p>Members</p>
      <p class="circle-mark mt-2">+40</p>
    </div>
    <div>
      <img src="@/assets/temp_src/progress-bar.png" alt="">
      <a class="mt-5" href="">Edit</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RulesCard'
}
</script>
<style scoped>
  .card-container {
    width: 270px;
    height: 250px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    padding: 20px;
  }
  .card-title {
    margin: 5px 0px;
  }
  .card-title p {
    font-size: 14px;
    color: rgb(182, 182, 182);
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
