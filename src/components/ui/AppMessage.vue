<template>
  <div v-if="message" class="width_center q-pa-md">
    <q-dialog v-model="alert" seamless position="top" transition-show="scale">
      <q-card class="bg-teal" style="bottom: -35px">
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section>{{ message.value }} </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const TITLE_MAP = {
      primary: "Успешно...",
      danger: "Ошибка!",
      warning: "Внимание!",
    };
    const message = computed(() => store.state.message);
    const title = computed(() =>
      message.value ? TITLE_MAP[message.value.type] : null
    );
    return {
      alert: ref(true),
      message,
      title,
    };
  },
};
</script>

<style scoped>
.width_center {
  display: flex;
  justify-content: center;
  color: wheat;
}
</style>
