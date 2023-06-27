import { defineStore } from 'pinia'
import { mande } from 'mande'


let base_url = import.meta.env.VITE_BASE_URL
if(!base_url){
  base_url = '/'
}

const todo_api = mande(base_url + 'api/todo')


const useToDoStore = defineStore('todo', {
  state: () => ({
    items: Array(),
    loading: false
  }),
  actions: {
    async addTask(task: any) {
      this.loading = true
      try {
        this.items.push(await todo_api.post(task))
      } catch (error) {}

      this.loading = false

    },
    async deleteTask(index: number) {
      let item = this.items[index]

      this.loading = true

      try {
        await todo_api.delete(item.id)
        this.items.splice(index, 1)

      } catch (error) {}

      this.loading = false

    },
    async markAsDone(index: number){
      let item = this.items[index]

      this.loading = true

      try {
        item.isDone = !item.isDone

        let updated_item = await todo_api.put(item.id, item)
        this.items[index] = updated_item
      } catch (error) {}

      this.loading = false

    },
    async loadItems(){
      this.loading = true

      try {
        this.items = await todo_api.get();
      } catch (error) {}

      this.loading = false
    }
  },
})


export { useToDoStore }