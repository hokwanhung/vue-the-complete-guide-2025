const app = Vue.createApp({
  data() {
    return {
      customClass: '',
      isParaVisible: true,
      bgColor: '',
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // inputClass(value) {
    //   this.customClass = value;
    // },
    toggleVisible() {
      this.isParaVisible = !isParaVisible;
    },
    // inputBgColor(value) {
    //   this.bgColor = value;
    // }
  }
});

app.mount('#assignment');