<template>
  <div class="row full_width q-pt-xl">
    <q-card color="blue" class="col-xs-12 col-sm-10 col-md-8">
      <q-card-section horizontal>
        <q-card-section class="bg-primary text-white text-center">
          <div text-h5 class="text-h6">цех</div>
          <div class="text-h5 text-weight-bolder">{{ tzeh }}</div>
        </q-card-section>
        <q-separator vertical />
        <q-card-section class="bg-primary text-white" style="width: 100%">
          <div class="text-h6"><small>профессия: </small> {{ professia }}</div>
          <q-separator />
          <q-card-section>
            <div class="text-h6">
              {{ description }}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card-section>
      <q-separator />

      <q-card-section horizontal>
        <span color="primary" class="q-ml-lg q-mt-sm text-primary"
          >создана: {{ date }}
        </span>
        <q-space />
        <q-btn
          size="sm"
          @click="$emit('del', id)"
          color="red"
          outline
          class="q-mr-xl q-mb-xs q-mb-xs q-mt-xs"
          label="Удалить"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  emits: ["del"],
  props: ["tzeh", "professia", "description", "date", "id"],
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
