<template>
  <base-card>
    <form @submit.prevent="addedResource">
      <div>
        <label for="title"><strong>Title</strong></label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="description"><strong>Description</strong></label>
        <input type="text" v-model="description" />
      </div>
      <div>
        <label for="link"><strong>Link</strong></label>
        <input type="url" v-model="link" />
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
      title: "",
      description: "",
      link: "",
      incorrectInput: false,
    };
  },
  methods: {
    addedResource() {
      if (this.title === "" || this.description === "") {
        console.log("incorrect input");
        this.incorrectInput = true;
      } else {
        this.$emit("add-resource", this.title, this.description, this.link);
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