<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title> {{ Name }}</q-toolbar-title>
      <q-space />
      <q-btn
        size="sm"
        label="Создать заявку"
        @click="createBtn = true"
        class="q-mr-lg"
      ></q-btn>
      <router-link to="/" class="link">
        <q-btn size="sm" label="на главную" />
      </router-link>
    </q-toolbar>

    <create-zayavka
      v-if="createBtn"
      @chancel="createBtn = false"
      @createZayavka="zayavkaCreated"
    ></create-zayavka>
    <div v-if="loading" class="full_width q-mt-lg" style="height: 100vh">
      <q-spinner-pie color="orange" size="7.5em" />
    </div>

    <div
      v-if="epmty_or_not === true"
      class="text-h5 full_width_w text-white q-mt-xl q-ml-xl"
    >
      У Вас пока нет созданных вакансий. Чтобы создать вакансию нажмите создать
      заявку.
    </div>
    <q-list
      v-else
      v-for="item in zayavka_profile"
      :key="item"
      dark
      separator
      class="full_width"
    >
      <zayavkaProfile
        @del="del_prof"
        :tzeh="item.tzeh"
        :professia="item.professia"
        :description="item.description"
        :date="item.date"
        :id="item._id"
      >
        {{ item }}</zayavkaProfile
      >
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import zayavkaProfile from "../components/TheZayavkaProfile";
import CreateZayavka from "../components/createZayavka.vue";
import keys from "../../keys/keys.dev";

export default {
  components: { zayavkaProfile, CreateZayavka },

  setup() {
    onBeforeMount(async () => {
      loading.value = true;
      const data = await axios.post(`${keys.BASE_URL}/get_Zayavka_profile`, {
        id_sozdatelya,
      });
      zayavka_profile.value = data.data.reverse();
      loading.value = false;

      if (zayavka_profile._rawValue.length === 0) {
        epmty_or_not.value = true;
      } else {
        epmty_or_not.value = false;
      }
    });

    var loading = ref(false);
    const zayavka_profile = ref(false);
    const $store = useStore();
    const Name = computed({
      get: () => $store.getters["auth/Name"],
    });
    var id_sozdatelya = computed({
      get: () => $store.getters["auth/id"],
    });

    id_sozdatelya = id_sozdatelya.value;
    var createBtn = ref(null);
    var epmty_or_not = ref(false);
    return {
      Name,
      createBtn,
      zayavka_profile,
      loading,
      epmty_or_not,

      zayavkaCreated: () => {
        createBtn.value = false;
        $store.dispatch("setMessage", {
          value: "Вакансия создана",
          type: "warning",
        });
      },

      del_prof: async (dt) => {
        await axios.post(`${keys.BASE_URL}/del_Zayavka`, {
          dt,
        });
        const data = await axios.post(`${keys.BASE_URL}/get_Zayavka_profile`, {
          id_sozdatelya,
        });
        zayavka_profile.value = data.data.reverse();
      },

      get_Zayavka_profile: async () => {
        const data = await axios.post(`${keys.BASE_URL}/get_Zayavka_profile`, {
          id_sozdatelya,
        });
        zayavka_profile.value = data.data.reverse();
      },
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
.full_width_w {
  display: flex;
  justify-content: center;
}
</style>
