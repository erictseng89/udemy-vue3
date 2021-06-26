<template>
  <dialog open>
    <slot />
  </dialog>
</template>

<script>
export default {};
</script>

<style>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
</style>