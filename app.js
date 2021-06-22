const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    }
  },
  methods: {
    addCounter(value) {
      this.counter = this.counter + value;
    },
    removeCounter(value) {
      this.counter = this.counter - value;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  }
})

app.mount('#events');