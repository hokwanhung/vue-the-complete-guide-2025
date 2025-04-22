function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      specialAttackUsedRound: undefined,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      return {
        width: (this.monsterHealth < 0 ?
          '0' : this.monsterHealth) + '%'
      };
    },
    playerBarStyles() {
      return {
        width: (this.playerHealth < 0 ?
          '0' : this.playerHealth) + '%'
      };
    },
    isSpecialAttackAvai() {
      // REMARK: To allow special attack every three rounds depending on when it is used.
      return this.specialAttackUsedRound === undefined ||
        ((this.currentRound - this.specialAttackUsedRound) >= 3);
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.specialAttackUsedRound = undefined;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.specialAttackUsedRound = this.currentRound;
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'specialAttack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      (this.playerHealth + healValue > 100) ?
        this.playerHealth = 100 : this.playerHealth += healValue;
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    isActionByPlayer(logMessage) {
      return logMessage.actionBy === 'player';
    }
  }
});

app.mount('#game');