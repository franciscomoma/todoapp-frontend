<script setup lang="ts">
import TodoListView from './views/TodoListView.vue'

</script>

<template>
  <div class="md:max-w-4xl m-auto">
    <header class="sm:space-x-6 p-3">
      <h1 class="text-center mb-2 text-3xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white uppercase">Lista de tareas</h1>
    </header>
    <TodoListView></TodoListView>
  </div>
</template>

<style scoped>

</style>
