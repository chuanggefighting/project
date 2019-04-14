<template>
  <div id="app">
      <h1>vue-ssr</h1>
      <!-- <img src="@/assets/img/logo.png" alt=""> -->
      <router-link class="link" to="/home">to home</router-link>
      <router-link class="link" to="/index">to index</router-link>
      <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.link {
  margin-right: 10px;
}
</style>
