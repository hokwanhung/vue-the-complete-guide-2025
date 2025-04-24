<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- REMARK: The way Vue supports out transitions. -->
    <!-- REMARK: transition must contain only one child component. -->
    <!-- REMARK: Can even fully customise the "v-enter-to". -->
    <transition name="para" enter-to-class="" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
      <!-- REMARK: Especially useful with v-if or v-show. -->
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <!-- REMARK: This mode enables first animate removal, then animate addition. -->
    <transition name="fade-button" mode="out-in">
      <!-- REMARK: Only exception is that can guarantee that at most one child component at a time. -->
      <!-- REMARK: Not working when I tried, still got VueCompilerError. -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <!-- <transition name="modal"> -->
  <!-- REMARK: This should fall through, but there's two children inside <base-modal />. -->
  <!-- REMARK: Cannot use v-if here because it'd not be handled by <transition />. -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      // REMARK: Store the intervals outside of the methods.
      
    };
  },
  methods: {
    // REMARK: The triggering time depends on the animation timeframe,
    // also for leave, beforeLeave, and afterLeave.
    beforeEnter(element) {
      element.style.opacity = 0;
    },
    enter(element, done) {
      // REMARK: Use vanila JS to do animation work.
      let round = 1;
      const interval = setInterval(() => {
        element.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(interval);
          done(); // REMARK: Use this function to let Vue understand the setInterval logic.
        }
      }, 20);
    },
    // eslint-disable-next-line no-unused-vars
    afterEnter(element) { },
    beforeLeave(element) {
      element.style.opacity = 1;
    },
    leave(element, done) {
      let round = 1;
      const interval = setInterval(() => {
        element.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(interval);
          done(); // REMARK: Use this function to let Vue understand the setInterval logic.
        }
      }, 20);
    },
    // eslint-disable-next-line no-unused-vars
    afterLeave(element) { },
    enterCancelled() {},
    leaveCancelled() {},
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /** REMARK: Either use transform-transition or animation. */
  /* transform: translateX(-150px); */
  /** REMARK: the keyword 'forwards' keeps it in the end position. */
  animation: slide-fade 0.3s ease-out forwards;
}

/** REMARK: Instead of "v-" which is global, use custom naming. */
/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .para-enter-active {
  /* transition: all 0.3s ease-out; 
  animation: slide-scale 0.3s ease-out;
} */

/* .para-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-leave-active {
  /* transition: all 0.3s ease-in;
  animation: slide-scale 0.3s ease-in;
} */

/* .para-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}


/* .modal-enter-from {}


.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-enter-to {} */
/* 
@keyframes modal {

  /** REMARK: from-to implies the 0 and 100%. 
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
} */

/** REMARK: The more advanced CSS animations. */
/** REMARK: The issue is of the removal of an element, which is hard to apply CSS to it. */
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>