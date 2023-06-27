
<script setup lang="ts">
  import { useToDoStore } from '../stores/todo';
  import TodoForm from '../components/TodoForm.vue'
  import TodoItem from '../components/TodoItem.vue'
  
  let todo_store = useToDoStore()

  todo_store.loadItems()

  function addTask(task: any){
    todo_store.addTask(task)
  }

  function deleteTask(index: number){
    todo_store.deleteTask(index)
  }

  function markAsDone(index: number){
    todo_store.markAsDone(index)
  }

</script>

<template>
  <div class="md:flex w-full">
    <div class="my-3 flex-column xs:w-full md:w-1/2" v-if="todo_store.loading">
      <div class="py-4 px-8 text-center">Cargando...</div>
    </div>
    <div class="my-3 flex-column xs:w-full md:w-1/2" v-if="!todo_store.loading">
      <div class="py-4 px-8 text-center" v-if="todo_store.items.length == 0">Aún no hay tareas creadas</div>
      <TodoItem @mark-as-done="markAsDone" @delete-task="deleteTask" :key="item.message" :task="item" :index="index" v-for="(item, index) in todo_store.items"></TodoItem>
    </div>
    <div class="my-3 flex-column xs:w-full md:w-1/2"> 
      <TodoForm @add-task="addTask"></TodoForm>
    </div>
  </div>
</template>

<style>

</style>
