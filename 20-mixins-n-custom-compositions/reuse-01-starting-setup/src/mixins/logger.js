export default {
  // REMARK: For life-cycle methods, the component one is run at last,
  // so as to override any clashed changes made by mixins.
  mounted() {
    console.log('Mounted!');
  }
}