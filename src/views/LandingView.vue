<template>
  <div class="landing">
    <nav>
      <BurgerMenu />
    </nav>

    <SidebarMenu>
      <ul class="sidebar-panel-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/gears">Gears</a></li>
      </ul>
    </SidebarMenu>

    <main>
      <div id="chibi">
        <component :is="child_component" />
      </div>
      <div class="sub">
        <div class="links">
          <a href="https://instagram.com/muazamkamal" class="ig">⌨</a>
          <a href="https://last.fm/user/muazamkamal" class="lastfm">🎧</a>
          <a href="https://twitch.tv/muazamkamal" class="twitch">🎮</a>
          <a href="https://youtube.com/muazamkamal" class="yt">🎬</a>
          <br />
        </div>
        <p class="tag">enthusiast.</p>
        <a href="mailto:contact@muazamkamal.com" class="email"
          >contact@muazamkamal.com</a
        >
      </div>
    </main>
  </div>
</template>

<script>
import ChibiComp from '@/components/ChibiComp.vue'
import BurgerMenu from '@/components/menu/BurgerMenu.vue'
import SidebarMenu from '@/components/menu/SidebarMenu.vue'

export default {
  metaInfo: {
    title: 'Muazam Kamal',
    meta: [
      // Primary meta
      {
        name: 'title',
        content: 'Muazam Kamal',
      },
      {
        name: 'description',
        content: 'enthusiasts.',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://muazamkamal.com/',
      },
      {
        property: 'og:title',
        content: 'Muazam Kamal',
      },
      {
        property: 'og:site_name',
        content: 'Muazam Kamal',
      },
      {
        property: 'og:description',
        content: 'enthusiasts.',
      },
      {
        property: 'og:image',
        content: 'https://muazamkamal.com/chibi.png',
      },
      {
        property: 'og:image:width',
        content: '1500',
      },
      {
        property: 'og:image:height',
        content: '1500',
      },
      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://muazamkamal.com/',
      },
      {
        property: 'twitter:title',
        content: 'Muazam Kamal',
      },
      {
        property: 'twitter:description',
        content: 'enthusiasts.',
      },
      {
        property: 'twitter:image',
        content: 'https://muazamkamal.com/chibi.png',
      },
      {
        property: 'twitter:creator',
        content: '@muazamkamal',
      },
    ],
  },
  name: 'LandingView',
  components: {
    ChibiComp,
    BurgerMenu,
    SidebarMenu,
  },
  data() {
    return {
      child_component: 'ChibiComp',
    }
  },
}
</script>

<style scoped>
a,
a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:active {
  text-decoration: none;
  color: rgb(14, 124, 89);
}

.landing {
  height: 100%;
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.links {
  display: flex;
  justify-content: center;
  font-size: 32px;
  letter-spacing: 0.4em;
}

.links a:hover,
.links a:active {
  color: white;
  font-size: 1.5em;
}

.tag {
  font-size: 1.75em;
  color: rgb(98, 98, 98);
  letter-spacing: 0.3em;
  font-weight: 100;
}

.email {
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 1px;
}

#chibi {
  width: clamp(200px, 40%, 500px);
}

@media only screen and (max-width: 600px) {
  .links {
    font-size: 1.25em;
  }

  .tag {
    font-size: 1.25em;
  }

  .email {
    font-size: 1em;
  }
}

nav {
  display: flex;
  flex-direction: row-reverse;
}

ul.sidebar-panel-nav {
  list-style-type: none;
  top: 50%;
  padding-left: 0;
}

ul.sidebar-panel-nav > li {
  font-size: 3em;
  font-weight: 400;
  margin: 0.5em 0;
}

ul.sidebar-panel-nav > li > a {
  color: white;
  height: 80px;
  line-height: 80px;
  display: block;
}

ul.sidebar-panel-nav > li > a:hover {
  color: rgb(98, 98, 98);
}
</style>
