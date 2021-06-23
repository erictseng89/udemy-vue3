function calculateRandomValue(min, max) {
  return Math.floor(min + (max - min) * Math.random());
};

const app = Vue.createApp({

  data() {
    return {
      monsterHealthBar: 100,
      slayerHealthBar: 100,
      battleLog: [],
      battleResult: '',
      round: 0,
    }
  },

  watch: {
    monsterHealthBar(value) {
      if (value <= 0 && this.slayerHealthBar <= 0) {
        this.battleResult = "It's a draw!";
      } else if (value <= 0) {
        this.battleResult = 'Victory!';
      }
    },
    slayerHealthBar(value) {
      if (value <= 0 && this.monsterHealthBar <= 0) {
        this.battleResult = "It's a draw!"
      } else if (value <= 0) {
        this.battleResult = "Defeat!";
      }
    }
  },

  computed: {
    monsterHealthStyle() {
      return { width: this.monsterHealthBar + '%' };
    },
    slayerHealthStyle() {
      return { width: this.slayerHealthBar + '%' };
    },
    mayUseSpecialAttack() {
      return this.round % 3 != 0;
    },
  },

  methods: {
    attackMonster(attackType) {
      this.round++;
      const damage = attackType === 'normal' ? calculateRandomValue(8, 12)
        : attackType === 'special' ? calculateRandomValue(12, 25)
          : '';
      if (damage > this.monsterHealthBar) {
        this.monsterHealthBar = 0;
      } else {
        this.monsterHealthBar -= damage;
      };
      this.logAction('slayer', `${attackType} attacks`, damage);
      this.attackSlayer();
    },

    attackSlayer() {
      const monsterDamage = calculateRandomValue(10, 15);
      if (monsterDamage > this.slayerHealthBar) {
        this.slayerHealthBar = 0;
      } else {
        this.slayerHealthBar -= monsterDamage;
      };
      this.logAction('monster', 'attacks', monsterDamage);
    },

    /**
     * Calculates attack damage based on attack type
     * @param {string} type Type of attack
     * @returns integer
     */
    calcAttack(type) {
      return type === 'normal' ? calculateRandomValue(8, 12)
        : type === 'special' ? calculateRandomValue(10, 25)
          : '';
    },

    healSlayer() {
      this.round++;
      const healValue = calculateRandomValue(8, 20);
      if (healValue + this.slayerHealthBar >= 100) {
        this.slayerHealthBar = 100;
      } else {
        this.slayerHealthBar += healValue;
      };
      this.logAction('slayer', 'heal', healValue);
      this.attackSlayer();
    },

    surrender() {
      this.slayerHealthBar = 0;
    },

    startNewGame() {
      this.slayerHealthBar = 100;
      this.monsterHealthBar = 100;
      this.round = 0;
      this.battleResult = '';
      this.battleLog = [];
    },

    logAction(who, what, value) {
      this.battleLog.unshift({
        actor: who,
        action: what,
        value: value
      });
    }
  },
});

app.mount('#game');