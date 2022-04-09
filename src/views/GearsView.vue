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
          <template v-if="detail.link"
            ><a :href="detail.link">{{ detail.name }}</a>
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
              name: '2 x Crucial Ballistix 8GB DDR4-3200',
              link: 'https://www.crucial.com/memory/ddr4/bl2k8g32c16u4b',
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
              name: 'NuForce uDAC-3 DAC/AMP Combo',
              link: 'https://drop.com/buy/udac-3-amp-dac',
            },
            {
              name: 'Massdrop X NuForce EDC In-Ear Monitors',
              link: 'https://drop.com/buy/massdrop-x-nuforce-edc-in-ear-monitors',
            },
          ],
        },
        {
          type: 'keyboard',
          details: [
            {
              name: 'Obinslab Anne Pro 1 (Gateron Red)',
            },
          ],
        },
        {
          type: 'mouse',
          details: [
            {
              name: 'Steelseries Sensei 310',
              link: 'https://steelseries.com/gaming-mice/sensei-310',
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

.ram {
  background-position: 45% 50%;
}

.monitor {
  background-position: 50% 50%;
}

.audio {
  background-position: 45% 55%;
}

.keyboard {
  background-position: 50% 50%;
}

.mouse {
  background-position: 60% 40%;
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
