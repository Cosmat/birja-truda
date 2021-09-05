<template>
  <div class="row centered">
    <q-spinner-pie color="orange" size="7.5em" v-if="loading" />
    <q-card
      v-else
      class="col-xs-12 col-sm-10 col-md-5"
      style="background: #ab91e5"
    >
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Ваше имя"
            hint="Пожалуйста укажите Ваш никнейм"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Пожалуйста напишите что-либо',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="pass"
            hint="Пожалуйста укажите Ваш пароль"
            label="Ваш пароль"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Пожалуйста напишите что-либо',
            ]"
          />
          <div>
            <q-btn label="Войти" @click="onSubmit" color="primary" />
            <q-btn label="На главную" class="q-ml-sm" color="primary" to="/" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $store = useStore();
    const router = useRouter();
    const name = ref(null);
    const pass = ref(null);
    var loading = ref(null);
    return {
      name,
      pass,
      loading,

      async onSubmit() {
        if (pass.value) {
          loading.value = true;
          try {
            const formData = {
              name: name.value,
              password: pass.value,
            };
            await $store.dispatch("auth/login", formData);

            router.push("/");
          } catch (e) {
            console.log(e);
            loading.value = false;
          }
        } else {
          $store.dispatch("setMessage", {
            value: "Пожалуйста введите имя и пароль",
            type: "warning",
          });
        }
      },
    };
  },
};
</script>

<style scoped></style>
