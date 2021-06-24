<template>
  <h1>Users</h1>
  <user-data @add-user="addUser"></user-data>
  <active-user
    v-for="user in users"
    :name="user.name"
    :age="user.age"
    :key="user.id"
  ></active-user>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: +age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
</style>