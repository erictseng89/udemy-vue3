<template>
  <form action="" @submit.prevent="$emit('add-user', name, age)">
    <div>
      <label for="name">Name</label
      ><input type="text" name="name" id="name" v-model="name" />
    </div>
    <div>
      <label for="age">Age</label
      ><input type="number" name="age" id="age" v-model="age" />
    </div>
    <button type="submit">Add User</button>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
};
</script>

<style>
</style>