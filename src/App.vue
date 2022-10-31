<template>
  <div class="">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/task">Task</RouterLink> |
        <RouterLink to="/Education">Education</RouterLink> |
        <RouterLink to="/Work">Work</RouterLink> |
        <RouterLink to="/Shopping">Shopping</RouterLink>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<script>
export default {};
</script>
