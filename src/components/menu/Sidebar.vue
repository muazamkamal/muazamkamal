<template>
  <div class="sidebar">
    <transition name="open">
      <div
        class="sidebar-backdrop"
        @click="toggleNav"
        v-if="$store.state.isNavOpen"
      ></div>
    </transition>
    <transition name="slide">
      <div v-if="$store.state.isNavOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    isPanelOpen: true
  }),
  methods: mapMutations(["toggleNav"])
};
</script>
<style>
.slide-enter-active,
.slide-leave-active,
.open-enter-active,
.open-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 150ms ease-in 0s;
}

.open-enter,
.open-leave-to {
  opacity: 0;
  transition: all 200ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.98);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 1;
}

.sidebar-panel {
  overflow-y: hidden;
  background-color: none;
  margin: 0 auto;
  position: relative;
  top: 0;
  height: 100%;
  z-index: 2;
  width: 300px;
}
</style>
