<template>
  <div class="tab-content">
    <p class="description">Rules allow you to create groups within your organization and set standards for test results. For example, you may want to test unvaccinated faculty more frequently than those who have been vaccinated.</p>
    <h3 class="mt-4">Your organization's rules</h3>
    <div class="tab-sub-content">
      <RulesCard />
      <img class="ms-1 me-1" src="@/assets/temp_src/card-athlete.png" alt="">
      <img class="ms-1 me-1" src="@/assets/temp_src/card-new.png" alt="">
    </div>
  </div>
</template>
<script>
import RulesCard from '../../components/CardView.vue'
export default {
  name: 'TestingRules',
  components: { RulesCard }
}
</script>
<style scoped>
  .tab-sub-content  {
    display: inline-flex;
    margin: 30px 0;
  }
</style>
