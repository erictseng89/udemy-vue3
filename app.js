const app = Vue.createApp({
  data() {
    return {
      courseGoalA: '<del>Finish this course quickly!</del>',
      courseGoalB: 'Master vue!',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
})

app.mount('#user-goal');
