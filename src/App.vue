<template>
  <div id="app" v-bind:style="{ backgroundColor: dynamicBackground }">
    <p class="selected-role" v-if="userRole">Selected role: <span> <i class="low vision icon"></i> {{ userRole }} </span> </p>
    <div id="nav">
      <router-link to="/roles">Roles</router-link> |
      <router-link to="/posts">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    dynamicBackground() {
      return this.$store.state.dynamicBackground;
    },
    userRole() {
      return this.$store.state.user.role;
    },
  },
  mounted() {
    this.$router.push({ path: '/roles' });
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  height: 100%;
  padding-top: 20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.selected-role {
  font-size: 1em;
}

.selected-role span {
  font-weight: bolder;
  color: #42b983;
  font-size: 1.3em;
}

</style>
