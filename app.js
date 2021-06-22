const app = Vue.createApp({
  data() {
    return {
      number: 0,
      message: [
        'Not there yet',
        'Too much!',
      ],
    }
  },
  /**
   * You can watch computed properties as well as data properties. Use the const that =
   * this trick to use 'this' in nested functions.
   */
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return this.message[0];
      } else if (this.number === 37) {
        return this.number;
      } else {
        return this.message[1];
      }
    }
  },
  methods: {
    addFive() {
      this.number = this.number + 5;
    },
    addOne() {
      this.number = this.number + 1;
    },
  }
});

app.mount('#assignment');