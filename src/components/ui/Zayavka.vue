<template>
  <div class="row q-pt-xl cent">
    <q-card color="blue" class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
      <q-card-section horizontal class="full-width">
        <q-card-section class="bg-primary text-white text-center">
          <div text-h5 class="text-h6">цех</div>
          <div class="text-h5 text-weight-bolder">{{ tzeh }}</div>
        </q-card-section>
        <q-separator vertical />
        <q-card-section class="bg-primary text-white full-width">
          <div class="text-h6"><small>профессия: </small> {{ professia }}</div>
          <q-separator />
          <q-card-section>
            <div class="text-h6">
              {{ description }}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card-section>

      <q-card-section horizontal>
        <span class="q-ml-lg q-mt-sm q-mb-xs text-dark"
          >создана: {{ date }}
        </span>
        <q-space />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["tzeh", "professia", "description", "date"],
  setup() {},
};
</script>

<style scoped>
.cent {
  justify-content: center;
}
</style>
