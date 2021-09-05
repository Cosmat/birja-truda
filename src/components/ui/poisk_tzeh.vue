<template>
  <div class="my row">
    <div class="col-xs-5 col-lg-3 q-pt-md">
      <q-input
        rounded
        outlined
        color="orange"
        bg-color="deep-purple-2"
        label="поиск по цеху"
        dense
        v-model="tzeh"
      />
    </div>
    <div class="col-xs-5 col-lg-3 q-pt-md">
      <q-input
        rounded
        outlined
        color="orange"
        bg-color="deep-purple-2"
        label="поиск по профессии"
        dense
        v-model="professia"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  emits: ["update:modelValue"],
  props: ["modelValue"],
  setup(_, { emit }) {
    const tzeh = ref();
    const professia = ref("");
    watch([tzeh, professia], (values) => {
      emit("update:modelValue", {
        tzeh: values[0],
        professia: values[1].toLowerCase().trim(),
      });
    });
    return { tzeh, professia };
  },
};
</script>

<style scoped>
.my {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
