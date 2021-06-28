<template>
  <base-card>
    <button
      v-for="item in tabChoices"
      :key="item.tagName"
      @click="selectTab(item.tagName)"
      :class="activeTab === item.tagName ? 'active' : ''"
    >
      {{ item.name }}
    </button>
  </base-card>
</template>

<script>
export default {
  emits: ["select-tab"],
  methods: {
    selectTab(tagName) {
      this.$emit("select-tab", tagName);
    },
  },
  props: ["tabChoices", "activeTab"],
};
</script>

<style scoped>
button {
  background-color: inherit;
  color: black;
  border-radius: 0;
  height: 100%;
  border: 0;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0;
}
button:hover,
button:focus {
  background-color: hsl(290, 56%, 64%);
  color: white;
  /* border: ivory 2px solid; */
}
.active {
  background-color: hsl(300, 76%, 38%);
  color: white;
}
</style>