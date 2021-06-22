const app = Vue.createApp({
  data() {
    return {
      text1: '',
      text2: '',
    }
  },
  methods: {
    alert() {
      alert('alert');
    },
    changeText1(event) {
      this.text1 = event.target.value;
    },
    changeText2(event) {
      this.text2 = event.target.value;
    }
  }
})

app.mount('#assignment');