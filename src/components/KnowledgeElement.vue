<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ["id", "topicName", "description"],
  /**
   * This component can use the 'inject'ed function as if it were their own function.
   */
  inject: ["selectTopic"],
  emits: ["select-topic"],
};
</script>