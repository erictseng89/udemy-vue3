function generateRandomValue(min, max) {
  return Math.floor(min + (max - min) * Math.random());
}

const app = Vue.createApp({

  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      gameOverMessage: '',
      round: 0,
      battleLog: [],
    }
  },

  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.gameOverMessage = 'Draw';
      } else if (value <= 0) {
        this.gameOverMessage = 'Victory';
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.gameOverMessage = 'Draw';
      } else if (value <= 0) {
        this.gameOverMessage = 'Defeat';
      }
    }
  },

  computed: {
    mayUseSpecialAttack() {
      return this.round % 3 != 0;
    },
    monsterHealthStyle() {
      return { width: this.monsterHealth + '%' }
    },
    playerHealthStyle() {
      return { width: this.playerHealth + '%' }
    }
  },

  methods: {
    attackMonster(attackType) {
      this.round++;
      const attackValue = attackType === 'normal' ? generateRandomValue(8, 12)
        : attackType === 'special' ? generateRandomValue(10, 24)
          : '';
      console.log(`player attack value is ${attackValue}`)
      if (attackValue >= this.monsterHealth) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      };
      this.attackPlayer();
      this.addToLog('player', `${attackType} attacks`, attackValue);
    },
    attackPlayer() {
      const attackValue = generateRandomValue(10, 16);
      if (attackValue >= this.playerHealth) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      };
      this.addToLog('monster', 'attacks', attackValue);
    },
    healPlayer() {
      this.round++;
      const healValue = generateRandomValue(8, 20);
      if (healValue + this.playerHealth >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      };
      this.addToLog('player', 'heal', healValue);
      this.attackPlayer();
    },
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameOverMessage = '';
      this.round = 0;
      this.battleLog = [];
    },
    surrender() {
      this.gameOverMessage = 'Surrendered...';
    },
    addToLog(who, what, byHowMuch) {
      this.battleLog.unshift({
        actor: who,
        action: what,
        actionValue: byHowMuch
      })
    }

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