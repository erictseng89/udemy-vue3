const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    computedA() {
      return { active: this.boxASelected };
    }
  },
  methods: {
    selectBox(box) {
      if (box === 'A') {
        this.boxASelected = !thix.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !thix.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !thix.boxCSelected;
      }
    }
  }
})

app.mount('#styling');