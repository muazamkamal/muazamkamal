<template>
  <div class="gears">
    <div
      v-for="gear in gears"
      :key="gear.type"
      class="panel"
      :class="[gear.type]"
      :style="{
        'background-image':
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' +
          require(`@/assets/gears/${gear.type}.jpg`) +
          ')',
      }"
      @mouseenter="toggle($event)"
      @mouseleave="close($event)"
    >
      <h1 class="title">{{ gear.type }}</h1>
      <div class="extra">
        <div v-for="detail in gear.details" :key="detail.link">
          <template v-if="detail.link">
            <a :href="detail.link" target="_blank">
              <span>{{ detail.name }}</span>
            </a>
          </template>
          <template v-else>
            <span>{{ detail.name }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gears: [
        {
          type: 'cpu',
          details: [
            {
              name: 'AMD Ryzen™ 5 5600X',
              link: 'https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x',
            },
          ],
        },
        {
          type: 'gpu',
          details: [
            {
              name: 'Gainward GeForce RTX™ 3080 Phoenix V1',
              link: 'https://www.gainward.com/main/vgapro.php?id=1119&lang=en',
            },
          ],
        },
        {
          type: 'mobo',
          details: [
            {
              name: 'MSI B550M PRO-VDH WIFI',
              link: 'https://www.msi.com/Motherboard/B550M-PRO-VDH-WIFI',
            },
          ],
        },
        {
          type: 'ram',
          details: [
            {
              name: '2 x Patriot Viper Steel RGB 16GB DDR4-3600',
              link: 'https://viper.patriotmemory.com/products/viper-steel-rgb-ddr4-performance-ram',
            },
          ],
        },
        {
          type: 'monitor',
          details: [
            {
              name: 'AOC 24G2',
              link: 'https://au.aoc.com/product/24G2',
            },
          ],
        },
        {
          type: 'audio',
          details: [
            {
              name: 'Behringer U-Phoria UMC202HD',
              link: 'https://www.behringer.com/product.html?modelCode=P0BJZ',
            },
            {
              name: 'Audio-Technica AT2020',
              link: 'https://www.audio-technica.com/en-au/at2020',
            },
            {
              name: 'Sennheiser HD 560S',
              link: 'https://www.sennheiser-hearing.com/en-AU/p/hd-560s/',
            },
          ],
        },
        {
          type: 'keyboard',
          details: [
            {
              name: 'GamaKay LK67 (Black)',
              link: 'https://gamakay.com/products/gamakay-lk67-65-triple-mod-keyboard-customized-kit-rgb-hot-swappable-3pin-5pin-switch-65-programmable-triple-mode-wired-bluetooth-5-0-2-4ghz-keyboard-kit-nkro-pcb-mounting-plate-case-with-rotate-button-custom-keyboard',
            },
          ],
        },
        {
          type: 'mouse',
          details: [
            {
              name: 'Razer Viper Ultimate Wireless',
              link: 'https://www.razer.com/gaming-mice/razer-viper-ultimate',
            },
          ],
        },
      ],
      whichPanel: 'none',
    }
  },
  methods: {
    toggle(event) {
      // Remove event listener for mouse leave
      event.target.ontransitionstart = () => null

      // Add event listener for mouse over
      event.target.ontransitionend = () => {
        event.target.getElementsByClassName('extra')[0].style.display = 'inline'
      }
    },
    close(event) {
      // Remove event listener fro mouse over
      event.target.ontransitionend = () => null

      // Add event listener for mouse leave
      event.target.ontransitionstart = () => {
        event.target.getElementsByClassName('extra')[0].style.display = 'none'
      }
    },
    linkTo(link) {
      location.href = link
    },
  },
}
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
  opacity: 0.55;
  transition: all 0.45s ease-in-out;
  -o-transition: all 0.45s ease-in-out;
  -webkit-transition: all 0.45s ease-in-out;
  -moz-transition: all 0.45s ease-in-out;
}

.panel:hover {
  opacity: 1;
  flex: 2;
}

.title {
  text-transform: uppercase;
}

.extra {
  display: none;
}

.cpu {
  background-position: 45% 50%;
}

.gpu {
  background-position: 55% 50%;
}

.mobo {
  background-position: 55% 50%;
}

.monitor {
  background-position: 50% 50%;
}

.audio {
  background-position: 45% 55%;
}

.keyboard {
  background-position: 45% 50%;
}

.mouse {
  background-position: 50% 60%;
}

@media only screen and (max-width: 600px) {
  .gears {
    flex-direction: column;
  }

  h1 {
    font-size: 0.9em;
  }
}
</style>
