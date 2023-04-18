<template>
  <AddTodo/>
  <hr/>
  <h1>Todo list</h1>
  <TodoList
    v-bind:todos="todos"
    @removeTodo="removeTodo"
  />
</template>

<script>
import TodoList from "@/components/TodoList.vue"
import AddTodo from "@/components/AddTodo.vue"
export default {
  name: 'App',
  data() {
    return {
        todos: [
            {id: 1, title: 'Купить хлеб', completed: false},
            {id: 2, title: 'Купить масло', completed: false},
            {id: 3, title: 'Купить пиво', completed: false},
            {id: 4, title: 'Купить пиво', completed: false},

        ]
    }
  },
  methods: {
    removeTodo(todoId) {
      this.todos = this.todos.filter(t => t.id !== todoId)
    }
  },
  components: {
    TodoList,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
