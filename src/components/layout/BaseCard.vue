<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-color: rgb(245, 245, 245);
  padding: 1rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: 1px solid rgb(235, 235, 235);
  border-radius: 5px;
  width: 600px;
  max-width: 95vw;
  margin-bottom: 2rem;
}
</style>