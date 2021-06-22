const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    removeCounter() {
      this.counter--;
    }
  }
})

app.mount('#events');