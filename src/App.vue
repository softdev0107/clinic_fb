<template>
    <div class="header d-flex justify-content-between header px-4 py-3">
      <div class="d-flex flex-row ">
        <div class="d-flex flex-row ">
          <img class="logo align-self-center" src="@/assets/logo.png" width="40" height="40" alt="">
          <h5 class="d-flex align-items-center ms-1">Covid Clinic</h5>
        </div>
        <div class="d-flex flex-row profile-container">
          <h5 class="bold avatar align-self-center">BM</h5>
          <div class="d-flex flex-row select-multiline-container">
            <div class="select-multiline">
              <p>Bill Murray</p>
              <span>District Access</span>
            </div>
            <img class="align-self-center select-btn" src="@/assets/icons/chevron-down.svg" alt="">
          </div>

          <!-- <select class="ms-1" name="username" id="sel-username">
            <option class="d-flex flex-column" value="userId">
              Bill Murray <br> District Access
            </option>
          </select> -->
        </div>
      </div>
      <img class="align-self-center setting-icon" src="@/assets/icons/cog-solid.svg" width="30" height="30" alt="">
    </div>
    <div class="menu">
      <router-link class="text-center menu-item"  to="/">Testing</router-link>
      <router-link class="text-center menu-item"  to="/vaccination">Vaccination</router-link>
      <router-link class="text-center menu-item"  to="/rules">Rules</router-link>
    </div>
  <!-- <Content /> -->
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  .header {
    width: 100%;
    height: 80px;
    padding: 10 20;
  }

  .profile-container {
    margin-left: 3rem;
  }

  .select-multiline-container {
    margin-left: 1rem;
  }

  .select-multiline image {
    width: 20px;
    height:20px;
  }

  .menu {
    width: 100%;
    height: 60px;
    padding: 10px;
    background-color: #F4F3F4;
    display: inline-flex;

  }

  .text-center {
    text-align: center;
    line-height: 40px;
  }

  .menu-item {
    margin: 0 10px;
  }

  .menu a {
      color:black;
      text-decoration : none;
  }

  .menu a:active {
    color:black;
    text-decoration : none;
  }

  .title {
    padding:20px;
    margin:0px 10px;
  }

  .title h5 {
    font-size: 24px;
    font-weight:700;
  }

  .title p {
    font-size:12px;
    color:gray;
    padding-top:10px;
  }
  .tab-nav{
    padding: 0 0 20px 0px;
  }
  .tab-nav a {
    display: inline-block;
    width: 10%;
    color:black;
    text-decoration:none;
    padding:20px 50px;
  }

  .tab-nav a.router-link-active {
    /* padding: 20px; */
    border-bottom-color: blue;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  .router-link-active{
    color:black;
    text-decoration:none;
  }

</style>
