import { ref } from 'vue';

// REMARK: For reusable functions, we start with 'use-'.
function useAlert(startingVisibility = false) {
  const isAlertVisible = ref(startingVisibility);

  const showAlert = () => {
    isAlertVisible.value = true;
  }

  const hideAlert = () => {
    isAlertVisible.value = false;
  }

  return [
    isAlertVisible,
    showAlert,
    hideAlert,
  ] // or an object
}

export default useAlert;