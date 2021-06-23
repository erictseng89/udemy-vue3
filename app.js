const app = Vue.createApp({
  data() {
    return {
      inputA: '',
      inputB: '',
      visible: true,
    }
  },
  computed: {
    styleA() {
      return this.inputA === 'user1' ? 'user1' : this.inputA === 'user2' ? 'user2' : '';
    },
    styleB() {
      return this.visible ? 'visible' : 'hidden';
    }
  },
  methods: {
    styleButtonB() {
      this.visible = !this.visible;
    }
  }
})

app.mount('#assignment');
