<template>
  <div class="roles">
    <h1>Choose your role:</h1>
    <div class="ui grid container">
      <div class="ui form">
        <div class="field">
          <select @change="onSelectRole($event)">
            <option value="">Select a role..</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roles",
  methods: {
    onSelectRole(event) {
      this.$store.commit('SET_USER_ROLE', event.target.value);
      switch (event.target.value) {
        case "admin":
          console.log("admin");
          this.$store.commit('SET_DYNAMIC_BACKGROUND', '#d6e5fa')
          break;
        case "manager":
          console.log("manager");
          this.$store.commit('SET_DYNAMIC_BACKGROUND', '#baf1a1')
          break;
        case "guest":
          console.log("guest");
          this.$store.commit('SET_DYNAMIC_BACKGROUND', '#e9ea77')
          break;
      }
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
}
h1 {
  font-size: 1.5em;
}
</style>

