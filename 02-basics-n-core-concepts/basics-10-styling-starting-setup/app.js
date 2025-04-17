Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
    }
  },
  computed: {
    boxCClasses() {
      return { active: boxCSelected };
    }
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case 'A':
          this.boxASelected = !this.boxASelected;
          break;
        case 'B':
          this.boxBSelected = !this.boxBSelected;
          break;
        case 'C':
          this.boxCSelected = !this.boxCSelected;
          break;
        case 'D':
          this.boxDSelected = !this.boxDSelected;
          break; 
        default:
          break;
      }
    }
  }
});

app.mount('#styling');