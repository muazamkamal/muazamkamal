<template>
  <div class="landing">
    <Center>
      <component :is="child_component"></component>
      <div class="sub">
        <div class="links">
          <a href="https://instagram.com/muazamkamal" class="ig">⌨</a>
          <a href="https://last.fm/muazamkamal" class="lastfm">🎧</a>
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
  font-size: 28px;
  color: rgb(98, 98, 98);
  letter-spacing: 0.3em;
}

.email {
  font-size: 24px;
  font-style: italic;
}
</style>
