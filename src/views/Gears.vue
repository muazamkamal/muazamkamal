<template>
  <div class="gears">
    <div class="box cpu">
      <h1>CPU</h1>
      <div class="extra">
        Ryzen 5 3600
      </div>
    </div>
    <div class="box gpu">
      <h1>GPU</h1>
      <div class="extra">
        NVIDIA RTX 2060 6GB
      </div>
    </div>
    <div class="box ram">
      <h1>RAM</h1>
      <div class="extra">
        2 x 8GB GALAX Gamer II RGB Memory
      </div>
    </div>
    <div class="box audio">
      <h1>AUDIO</h1>
      <div class="extra">
        Focusrite Scarlett 2i2 Gen 2
      </div>
    </div>
  </div>
</template>

<style scoped>
.gears {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 100vh;
}

.box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box:active {
  flex: 2;
}

.extra {
  /* visibility: hidden; */
  display: none;
}

.box:active > .extra {
  /* visibility: visible; */
  display: inline;
}

.cpu:hover {
  background-color: rgba(255, 0, 0, 0.5);
}

.gpu:hover {
  background-color: rgba(0, 255, 0, 0.5);
}

</style>
