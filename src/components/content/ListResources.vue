<template>
  <base-card>
    <div class="contents">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="link">View Resource</a>
      <button @click="deleteResource(id)">Delete</button>
    </div>
  </base-card>
</template>

<script>
export default {
  inject: ["deleteResource"],
  props: ["id", "title", "description", "link"],
};
</script>

<style scoped>
.contents {
  position: relative;
  width: 100%;
}
button {
  position: absolute;
  top: 0;
  right: 0;
  color: purple;
  border: 0;
  background-color: inherit;
  cursor: pointer;
}
</style>