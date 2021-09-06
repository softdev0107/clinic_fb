<template>
    <div class="title">
      <h5>Content Title</h5>
      <p>Content description</p>
    </div>
    <div class="tab-nav">
      <router-link to="/testing/update">Updates</router-link>
      <router-link to="/testing/rule">Rules</router-link>
      <router-link to="/testing/user">Users</router-link>
      <router-link to="/testing/notification">Notifications</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Testing'
}
</script>
<style scoped>
  .content-tab {
    margin-bottom: 20px;
  }
</style>
