<template>
  <div
    id="burger"
    :class="{ active: $store.state.isNavOpen }"
    @click.prevent="toggleNav"
  >
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar burger-bar--1" />
        <span class="burger-bar burger-bar--2" />
        <span class="burger-bar burger-bar--3" />
      </button>
    </slot>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations(['toggleNav']),
}
</script>
<style>
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  position: fixed;
  top: 0;
  right: 1%;
  height: 50px;
  width: 50px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: white;
  position: absolute;
  display: block;
  top: 25px;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar:nth-of-type(2) {
  top: 35px;
}

.burger-bar:nth-of-type(3) {
  top: 45px;
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

#burger.active .burger-bar--1 {
  transform: translateY(10px) rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
