<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Enter new task or edit current</div>
      </q-card-section>
      <q-form @submit.prevent="$emit('onSubmit')" id="saveTask">
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="title"
            autofocus
            @keyup.enter="$emit('onSubmit')"
          />
        </q-card-section>
      </q-form>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="Save" type="submit" form="saveTask" />
        <q-btn label="Cancel" @click="$emit('onCancel')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import IconEdit from "@/components/Icons/IconEdit.vue";

export default {
  data() {
    return {};
  },

  mounted() {},
  props: {
    show: Boolean,
    editedItem: Object,
  },
  components: {
    IconEdit,
  },
  emits: ["onCancel", "addTask", "toggleVisibleForm", "onSubmit", "onEditItem"],
  methods: {},
  computed: {
    title: {
      get() {
        return this.editedItem.title;
      },
      set(newValue) {
        this.$emit("onEditItem", { key: "title", value: newValue });
      },
    },
    isOpen: {
      get() {
        return this.show;
      },
      set(value) {
        console.log(value);
      },
    },
  },
};
</script>
