<template>
  <div class="notfound">
    <h1>The page you're looking for does not exist.</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style scoped>
h1 {
  font-weight: 200;
}

.notfound {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
