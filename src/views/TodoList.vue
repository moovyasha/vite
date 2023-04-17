<template>
  <div>
    <div>{{ getTasks }}</div>
    <h2>Todo</h2>
    <!-- <div>
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
      </select>
    </div> -->

    <VisibleForm
      :show="show"
      :editedItem="editedItem"
      @onCancel="onCancel"
      @toggleVisibleForm="toggleVisibleForm"
      @onSubmit="onSubmit"
      @onEditItem="onEditItem"
    />

    <q-btn round class="q_button_add" @click="editItem()">
      <img src="@/assets/AddTask.svg" />
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        transition-show="rotate"
        transition-hide="rotate"
      >
        ADD TASK
      </q-tooltip>
    </q-btn>

    <div
      v-if="allTasks && allTasks.length"
      class="q-pa-md test_middle"
      style="max-width: 400px"
    >
      <q-list bordered>
        <TodoItem
          v-for="(task, i) of allTasks"
          :task="task"
          @removeTask="removeTask"
          @completeTask="completed"
          :indexTask="i"
          @editItem="editItem"
        />
      </q-list>
    </div>

    <h2 v-else>NO TASKS!</h2>

    <!-- <Loader v-if="loading" /> -->
  </div>
</template>

<script>
import VisibleForm from "@/components/VisibleForm.vue";
import TodoItem from "@/components/TodoItem.vue";

export default {
  data() {
    return {
      filter: "all",
      show: false,
      editedItem: undefined,
      tipAdd: "Add Task",
      defaultTask: {
        id: "",
        title: "",
        completed: "",
      },
      getTasks: null,
    };
  },
  // testsetsetetsetestsetestset1212112
  components: {
    TodoItem,
    // Loader,
    VisibleForm,
  },
  methods: {
    removeTask(index) {
      this.$store.commit("tasks/removeTask", index);
    },
    completed(index) {
      this.$store.commit("tasks/statusTask", index);
    },
    onEditItem({ key, value }) {
      this.editedItem[key] = value;
    },
    onCancel() {
      this.editedItem = undefined;
      this.show = false;
    },
    editItem(task) {
      if (task && task.id) {
        this.editedItem = { ...task };
      } else {
        this.editedItem = { ...this.defaultTask };
      }
      this.show = true;
    },
    toggleVisibleForm(value) {
      this.show = value;
    },
    onSubmit() {
      // console.log('onSubmit', this.editedItem)

      //проверка на введенный текст в полеs
      if (this.editedItem.id === "") {
        if (this.editedItem.title.trim()) {
          const newTask = {
            id: Date.now(),
            title: this.editedItem.title,
            completed: false,
          };
          this.$store.commit("tasks/addTask", newTask);
        } /* создали новый элемент */
      } else {
        if (this.editedItem.title.trim()) {
          this.$store.commit("tasks/editTask", this.editedItem);
        }
      }
      this.toggleVisibleForm(false);
    },
  },
  async mounted() {
    this.$store.dispatch("tasks/fetchTasks");
  },
  computed: {
    // filterTask() {
    //   if (this.filter === "all") {
    //     return this.allTasks;
    //   }
    //   if (this.filter === "completed") {
    //     return this.allTasks.filter((t) => t.completed);
    //   }
    //   if (this.filter === "not-completed") {
    //     return this.allTasks.filter((t) => !t.completed);
    //   }
    // },

    allTasks() {
      return this.$store.state.tasks.taskList;
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h2 {
  margin: 0;
  padding: 0;
}
.q_button_add {
  margin: 5px;
  padding: 0;
}
.test_middle {
  width: 400px;
  margin: auto;
}
</style>
