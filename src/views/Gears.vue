<template>
  <div class="gears">
    <Center>
      <component :is="child_component"></component>
    </Center>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";
import GearsComp from "@/components/GearsComp.vue";

export default {
  name: "Gears",
  components: {
    Center,
    GearsComp
  },
  data() {
    return {
      child_component: "GearsComp"
    };
  }
};
</script>
