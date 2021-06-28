<template>
  <section>
    <list-resources v-for="item in list" :key="item.id" v-bind="item">
    </list-resources>
  </section>
</template>

<script>
import ListResources from "./ListResources.vue";

export default {
  components: {
    ListResources,
  },
  inject: ["list"],
};
</script>

<style>
</style>