<template>
  <q-item clickable v-ripple>
    <q-item-section
      class="task"
      v-bind:class="{ done: task.completed }"
      @click="$emit('completeTask', task.id)"
    >
      <!-- <input type="checkbox" :checked="task.completed" /> -->
      <q-checkbox v-model="isCompleted" color="green" />
      <span>{{ indexTask + 1 }}</span
      ><span class="first-upper">{{ task.title }}</span>
    </q-item-section>
    <q-item-section avatar>
      <q-btn-dropdown color="primary" padding="xs">
        <q-list>
          <q-item clickable v-close-popup @click="$emit('editItem', task)">
            <q-item-section>
              <q-item-label>Edit</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$emit('removeTask', task.id)">
            <q-item-section>
              <q-item-label>Delete</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <!-- <q-icon color="primary" name="bluetooth" /> -->
    </q-item-section>
  </q-item>
  <q-separator />
</template>

<script>
import IconDelete from "@/components/Icons/IconDelete.vue";
import IconEdit from "@/components/Icons/IconEdit.vue";
export default {
  data() {
    return {
      tipEdit: "Edit Task",
      tipDelete: "Delete Task",
    };
  },
  computed: {
    isCompleted: {
      get() {
        return this.task.completed;
      },
    },
  },

  props: {
    task: {},

    show: Boolean,
    indexTask: Number,
  },
  components: {
    IconDelete,
    IconEdit,
  },
  emits: ["completeTask", "editItem", "removeTask"],
};
</script>

<style scoped>
li {
  border: 4px solid rgb(121, 55, 121);
  /* display: block; */
  justify-content: space-between;
  padding: 12px 43px;
  margin-bottom: 5px;
  width: auto;
}
.done {
  text-decoration: line-through;
}

.task {
  display: inline;
  width: 280px;
}
</style>
