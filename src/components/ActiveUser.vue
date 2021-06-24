<template>
  <div>
    <span><strong>Name: </strong>{{ name }}</span>
  </div>
  <div>
    <span><strong>Age: </strong>{{ age }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>