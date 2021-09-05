<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title class="anim_1">Биржа труда</q-toolbar-title>
        <q-space />
        <q-btn class="q-mr-lg" v-if="token" to="/profile">{{ Name }}</q-btn>
        <q-btn
          v-if="!token"
          color="primary"
          label="Вход"
          class="q-mr-lg"
          to="/login"
        />
        <q-btn
          v-if="token"
          color="primary"
          label="Выход"
          class="q-mr-lg"
          @click="logout"
        />

        <q-btn v-if="!token" color="primary" label="Регистрация" to="/registr">
          <q-tooltip class="bg-purple" v-model="showing">Чтобы создать вакансию пожалуйста зарегистрируйтесь</q-tooltip></q-btn
        >
      </q-toolbar>
    </q-header>

    <q-page-container class="vertical-middle">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const showing = ref(false);
    const $store = useStore();
    const token = computed({
      get: () => $store.getters["auth/token"],
    });
    const Name = computed({
      get: () => $store.getters["auth/Name"],
    });

    onMounted(() => {
      setTimeout(() => showing.value = true, 3000);
       setTimeout(() => showing.value = false, 8000);
    });

    return {
      showing,
      token,
      Name,
      logout: () => {
        $store.commit("auth/logout");
      },
    };
  },
});
</script>
<style></style>
