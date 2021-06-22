const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addCounter(value) {
      this.counter = this.counter + value;
    },
    removeCounter(value) {
      this.counter = this.counter - value;
    }
  }
})

app.mount('#events');