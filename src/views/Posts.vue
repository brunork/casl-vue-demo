<template>
  <div class="card">
    <div v-if="userRole">
      <ListPosts />
    </div>
    <div class="not-role-selected" v-else>
      <h2>Please, select a role</h2>
    </div>
  </div>
</template>

<script>
import ListPosts from "../components/ListPosts";

export default {
  name: "Posts",
  components: {
    ListPosts
  },
  computed: {
    userRole() {
      return this.$store.state.user.role;
    }
  }
};
</script>
