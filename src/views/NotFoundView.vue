<template>
  <div class="notfound">
    <CenterComp>
      <h1>The page you're looking for does not exist.</h1>
    </CenterComp>
  </div>
</template>

<script>
import CenterComp from '@/components/CenterComp.vue'

export default {
  name: 'NotFoundView',
  components: {
    CenterComp,
  },
}
</script>

<style scoped>
h1 {
  font-weight: 200;
}
</style>
