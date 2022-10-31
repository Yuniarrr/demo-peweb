<template>
  <div class="">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/task">Task</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<script>
export default {};
</script>
