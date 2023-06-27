<script setup lang="ts">
  const emit = defineEmits(['addTask'])
  let message = ''

  function addTask(event: any){
    emit('addTask', {'message': message, 'isDone': false})

    event.target.reset()
  }
</script>

<template>
  <form class="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex items-center sm:space-y-0 sm:space-x-6 border border-green-800" @submit.prevent="addTask">
    <input v-model="message" class="bg-transparent px-4 py-1 outline-0" placeholder="Escribe aquí tu tarea" />
    <button type="submit" class="px-4 py-1 text-sm text-green-900 font-semibold rounded-full border border-green-800 hover:text-white hover:bg-green-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Añadir</button>
  </form>
</template>

<style scoped>
</style>
