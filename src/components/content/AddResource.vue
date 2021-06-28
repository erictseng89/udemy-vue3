<template>
  <base-card>
    <form @submit.prevent="addedResource">
      <div>
        <label for="title"><strong>Title</strong></label>
        <input type="text" ref="title" />
      </div>
      <div>
        <label for="description"><strong>Description</strong></label>
        <textarea type="text" ref="description" rows="3"></textarea>
      </div>
      <div>
        <label for="link"><strong>Link</strong></label>
        <input type="url" ref="link" />
      </div>
      <button type="submit">Add Resource</button>
    </form>
  </base-card>
  <teleport to="body" v-if="incorrectInput">
    <alert-error>
      <template v-slot:header>Invalid Input</template>
      <template v-slot:default
        ><p>Please input the correct information.</p>
        <button type="submit" @click="incorrectInput = false">
          Close Window
        </button></template
      >
    </alert-error>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      incorrectInput: false,
    };
  },
  inject: ["addResource"],
  methods: {
    addedResource() {
      if (
        this.$refs.title.value.trim() === "" ||
        this.$refs.description.value.trim() === ""
      ) {
        this.incorrectInput = true;
      } else {
        this.addResource(
          this.$refs.title.value,
          this.$refs.description.value,
          this.$refs.link.value
        );
      }
    },
    closeModal() {
      console.log("clicked");
      this.incorrectInput = false;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
div + div {
  margin-top: 1rem;
}
button {
  margin-top: 1.5rem;
}
</style>