<template>
  <div class="gears">
    <div
      class="panel cpu"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(cpuLink)"
    >
      <h1 class="title">CPU</h1>
      <div class="extra">
        <a :href="cpuLink">AMD Ryzen™ 5 3600</a>
      </div>
    </div>
    <div
      class="panel gpu"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(gpuLink)"
    >
      <h1 class="title">GPU</h1>
      <div class="extra">
        <a :href="gpuLink">GALAX GeForce® RTX 2060 (1-Click OC)</a>
      </div>
    </div>
    <div
      class="panel mobo"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(moboLink)"
    >
      <h1 class="title">MOBO</h1>
      <div class="extra">
        <a :href="moboLink">GIGABYTE B450M S2H (rev. 1.0)</a>
      </div>
    </div>
    <div
      class="panel ram"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(ramLink)"
    >
      <h1 class="title">RAM</h1>
      <div class="extra">
        <a :href="ramLink">2 x GALAX GAMER II PLUS DDR4-3000 8G</a>
      </div>
    </div>
    <div
      class="panel psu"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(psuLink)"
    >
      <h1 class="title">PSU</h1>
      <div class="extra">
        <a :href="psuLink">SilverStone ST60F-ES230 600W</a>
      </div>
    </div>
    <div
      class="panel audio"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
      @click="linkTo(audioLink)"
    >
      <h1 class="title">AUDIO</h1>
      <div class="extra">
        <a :href="audioLink">Focusrite Scarlett 2i2 2nd Gen</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpuLink: "https://www.amd.com/en/products/cpu/amd-ryzen-5-3600",
      gpuLink:
        "http://www.galax.com/en/graphics-card/galax-geforce-rtx-2060-1click.html",
      moboLink: "https://www.gigabyte.com/Motherboard/B450M-S2H-rev-10#kf",
      ramLink:
        "http://www.galax.com/en/ram/gamer-ram/galax-gamer2-plus-3000-8g.html",
      psuLink: "https://www.silverstonetek.com/product.php?pid=676&area=en",
      audioLink:
        "https://focusrite.com/usb-audio-interface/scarlett/scarlett-2i2",
      whichPanel: "none"
    };
  },
  methods: {
    toggle(event) {
      let currEl = event.target.className.split(" ")[1];

      let currActive = document.getElementsByClassName("panelActive")[0];

      if (currActive != undefined && currEl != this.whichPanel) {
        currActive.classList.remove("panelActive");
        this.whichPanel = "none";
      }

      if (this.whichPanel == "none" || currEl != this.whichPanel) {
        event.target.classList.add("panelActive");
        this.whichPanel = currEl;
      }

      event.target.addEventListener(
        "transitionend",
        () => {
          event.target.children[1].style.display = "inline";
        },
        false
      );
    },
    close(event) {
      event.target.classList.remove("panelActive");
      event.target.children[1].style.display = "none";
      this.whichPanel = "none";

      event.target.addEventListener(
        "transitionend",
        () => {
          event.target.children[1].style.display = "none";
        },
        false
      );
    },
    linkTo(link) {
      location.href = link;
    }
  }
};
</script>

<style scoped>
.gears {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 100vh;
}

.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: all 0.45s ease-in-out;
  -o-transition: all 0.45s ease-in-out;
  -webkit-transition: all 0.45s ease-in-out;
  -moz-transition: all 0.45s ease-in-out;
}

.panelActive {
  flex: 2;
}

.panel:hover {
  opacity: 1;
}

.extra {
  display: none;
}

.cpu {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/cpu.jpg");
  background-position: 30% 70%;
}

.gpu {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/gpu.jpg");
  background-position: 65% 25%;
}

.mobo {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/mobo.png");
  background-position: 70% 30%;
}

.ram {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/ram.png");
  background-position: 70% 30%;
}

.psu {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/psu.png");
  background-position: 70% 30%;
}

.audio {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/gears/2i2.png");
  background-position: 45% 55%;
}
</style>
