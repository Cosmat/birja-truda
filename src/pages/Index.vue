<template>
  <q-page>
    <div v-if="loading" class="full_width" style="height: 100vh">
      <q-spinner-pie color="orange" size="7.5em" />
    </div>
    <div v-else>
      <div class="row">
        <poisk_tzeh v-model="filter"></poisk_tzeh>
      </div>
      <q-list v-for="item in zayavki" :key="item" dark separator>
        <zayavka
          :tzeh="item.tzeh"
          :professia="item.professia"
          :description="item.description"
          :date="item.date"
        >
          {{ item }}</zayavka
        >
      </q-list>
    </div>
  </q-page>
</template>

<script>
import zayavka from "src/components/ui/Zayavka.vue";
import poisk_tzeh from "src/components/ui/poisk_tzeh";
import { onBeforeMount, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "PageIndex",
  components: { zayavka, poisk_tzeh },
  setup() {
    var loading = ref(false);
    const store = useStore();
    const filter = ref({});

    onBeforeMount(async () => {
      loading.value = true;
      await store.dispatch("requests/getallZayavka");
      loading.value = false;
    });
    const zayavki = computed(() =>
      store.getters["requests/getAllzayavki"]
        .filter((zayavk) => {
          if (filter.value.tzeh) {
            return zayavk.tzeh.includes(filter.value.tzeh);
          }
          return zayavk;
        })
        .filter((zayavk) => {
          if (filter.value.professia) {
            return zayavk.professia.includes(filter.value.professia);
          }
          return zayavk;
        })
    );

    return {
      loading,
      zayavki,
      filter,
    };
  },
};
</script>
<style scoped>
.full_width {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
