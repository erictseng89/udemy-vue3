<template>
  <ul>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'poor' }"
        @click="activate('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'average' }"
        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'great' }"
        @click="activate('great')"
      >
        Greate
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
  props: ["modelValue"],
};
</script>

<style scoped>
.active {
  background-color: purple;
}

.active button {
  background-color: purple;
}
ul {
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  bottom: none;
  background-color: transparent;
  cursor: pointer;
}
</style>