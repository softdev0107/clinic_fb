<template>
  <div class="tab-content">
    <p class="description">Rules allow you to create groups within your organization and set standards for test results. For example, you may want to test unvaccinated faculty more frequently than those who have been vaccinated.</p>
    <h3 class="mt-4">Your organization's rules</h3>
    <div class="tab-sub-content">
      <RuleCard
        v-for="(rule, index) in rules"
        v-bind:rule="rule"
        v-bind:index="index"
        v-bind:key="rule.titleType"/>
      <div class="card-new-container">
        <div class="card-new-content">
          <button type="button" class="circle-pulse btn btn-primary">+</button>
          <p>Create a New Rule</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RuleCard from '../../components/RuleCard.vue'
export default {
  name: 'TestingRules',
  components: { RuleCard },
  data () {
    return {
      rules: [
        {
          titleType: 'FACULTY',
          title: 'Unvaccinated Testing',
          memberCounts: 40,
          progress: 52
        },
        {
          titleType: 'STUDENTS',
          title: 'Athlete testing',
          memberCounts: 45,
          progress: 35
        }
      ]
    }
  }
}
</script>
<style scoped>
  .tab-sub-content  {
    display: inline-flex;
    margin: 30px 0;
  }
  .card-new-container {
    width: 270px;
    height: 250px;
    border: 1px gainsboro;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='gainsboro' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
    text-align: center;
    position: relative;
  }
  .card-new-content {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle-pulse {
    border-radius: 100%;
    font-size: 16px;
    font-weight: 700;
  }
  .card-new-container p {
    font-size: 12px;
    color: rgb(179, 179, 179);
    text-align: center;
    margin-top: 25px;
  }
</style>
