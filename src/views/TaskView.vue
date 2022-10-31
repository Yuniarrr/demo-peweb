<template>
  <div class="about">
    <h1>All Task</h1>
    <div v-for="(item, index) in TODO.task.newTodo" :key="index">
      <input
        type="checkbox"
        :name="item.id"
        id=""
        :checked="item.status == true"
        @click="TODO.updateStatus(item.id)"
      />
      <h4 v-if="showEdit == false" @dblclick="showEdit = true">
        {{ item.task }}
      </h4>
      <input
        type="text"
        name=""
        id=""
        v-model="item.task"
        v-if="showEdit == true"
        @keyup.enter="TODO.editTask(item.id), (showEdit = false)"
      />
      <h4>{{ item.category.join(", ") }}</h4>
    </div>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  data() {
    return {
      showEdit: false,
    };
  },
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
  created() {
    this.TODO.getNewTasks();
  },
};
</script>

<style></style>
