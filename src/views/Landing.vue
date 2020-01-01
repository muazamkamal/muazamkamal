<template>
  <div class="landing">
    <Center>
      <component :is="child_component"></component>
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
    </Center>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";
import Chibi from "@/components/Chibi.vue";

export default {
  name: "Landing",
  metaInfo: {
    meta: [
      {
        name: "google-site-verification",
        content: "9qyzWcHT1Q9PdJ9A-Mzv-c-7hyYAgb858cjIq-aQmDY"
      }
    ]
  },
  components: {
    Center,
    Chibi
  },
  data() {
    return {
      child_component: "Chibi"
    };
  }
};
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

.links {
  font-size: 32px;
  letter-spacing: 0.4em;
}

.links {
  display: flex;
  justify-content: center;
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
</style>
