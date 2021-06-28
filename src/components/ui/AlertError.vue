<template>
  <dialog open>
    <h3 class="header">
      <slot class="header" name="header" v-if="$slots.header"></slot>
    </h3>
    <div>
      <slot v-if="$slots.default" />
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  background-color: rgb(245, 245, 245);
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: 1px solid rgb(235, 235, 235);
  border-radius: 5px;
  width: 800px;
  max-width: 95vw;
  margin-bottom: 2rem;
  display: fixed;
  top: 25vh;
  margin: 0 auto;
}
</style>