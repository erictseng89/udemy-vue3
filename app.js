const app = Vue.createApp({
  data() {
    return {
      name: 'ted',
      age: 30,
      randNumber: Math.random(),
      link: 'https://cdn.nohat.cc/thumb/f/720/4996837261967360.jpg'
    }
  },
  methods: {
    randMethod() {
      return Math.random();
    },
  }
})

app.mount('#assignment');