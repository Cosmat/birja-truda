<template>
  <div class="row full_width">
    <q-card class="col-xs-12 col-sm-10 col-md-5" style="background: #ab91e5">
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="tzeh"
            label="Введите номер цеха/отдела"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Пожалуйста напишите что-либо',
            ]"
          />

          <q-input
            filled
            v-model="professia"
            label="Пожалуйста укажите профессию"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Пожалуйста напишите что-либо',
            ]"
          />
          <q-input
            type="textarea"
            filled
            v-model="description"
            label="Пожалуйста укажите сведения о вакансии"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Пожалуйста напишите что-либо',
            ]"
          />
          <div>
            <q-btn
              label="Создать"
              @click="
                $emit('createZayavka');
                onSubmit();
              "
              color="primary"
            />

            <q-btn
              label="Отмена"
              class="q-ml-sm"
              color="primary"
              @click="$emit('chancel')"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import dayjs from "dayjs";
import keys from "../../keys/keys.dev";
export default {
  emits: ["createZayavka", "chancel", "del"],
  setup() {
    const $q = useQuasar();
    const $router = useRouter();
    const $store = useStore();
    const tzeh = ref(null);
    const professia = ref("");
    const description = ref(null);
    const id = computed({
      get: () => $store.getters["auth/id"],
    });
    return {
      tzeh,
      professia,
      description,
      id,

      async onSubmit() {
        var d = dayjs().format("DD.MM.YYYY");
        try {
          const formData = {
            tzeh: tzeh.value,
            professia: professia.value.toLowerCase().trim(),
            description: description.value,
            id: id.value,
            date: d,
          };
          await axios.post(`${keys.BASE_URL}/createZayavka`, formData);
          tzeh.value = null;
          professia.value = null;
          description.value = null;
          $router.push("/");
        } catch (e) {
          console.log("error: ", e);
        }
      },
    };
  },
};
</script>

<style scoped></style>
