<template>
  <div>
    <AppMessage class="pos_abs" />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage";

export default {
  components: { AppMessage },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.pos_abs {
  position: absolute;
}
</style>
