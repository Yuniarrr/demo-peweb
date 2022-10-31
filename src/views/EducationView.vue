<template>
  <div>
    <h1>Category Education</h1>
    <div v-for="(item, index) in TODO.edu" :key="index">
      <h4>{{ item.task }}</h4>
      <h4>{{ item.category.join(", ") }}</h4>
    </div>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  created() {
    this.TODO.edu = [];
    this.TODO.getEducation("Education");
  },
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
};
</script>
