<script setup lang="ts">
  const emit = defineEmits(['deleteTask', 'markAsDone'])
  const props = defineProps({
    task: { type: Object, required: true },
    index: { type: Number, required: true },
  })

  function deleteTask(){
    emit('deleteTask', props.index)

  }

  function markAsDone(){
    emit('markAsDone', props.index)
  }
</script>

<template>
  <div class="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" >  
    <p @click="markAsDone" :class="{'line-through' : task.isDone}">{{ task.message }}</p><a @click="deleteTask">Borrar</a>
  </div>
</template>

<style scoped>
</style>
