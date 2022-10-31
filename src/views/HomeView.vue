<template>
  <div>
    <h1>TODO LIST WEBAPP</h1>
    <div>
      <label for="">New Task</label>
      <input type="text" name="newTask" v-model="TODO.task.newTask" />
      <div v-for="(category, index) in TODO.category" :key="index">
        <input
          type="checkbox"
          v-model="TODO.task.newCategory"
          :name="category.name"
          :id="category.name"
          :value="category.name"
        />
        <label :for="category.name">{{ category.name }} || {{ category.id }}</label>
      </div>
    </div>
    <button @click="TODO.addNewTask()">Submit</button>
  </div>
  <div>
    <h1>newTask: {{ TODO.task.newTask }}</h1>
    <h1>newCategory: {{ TODO.task.newCategory }}</h1>
    <h1>New Task: {{ TODO.task.newTodo }}</h1>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
  created() {
    this.TODO.getNewTasks();
  },
};
</script>
