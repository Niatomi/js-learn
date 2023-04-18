<template>
    <div>
        <ul class="list">
            <TodoItem
              v-for="todo in todos" :key="todo.id"
              v-bind:todo="todo"
              v-on:remove-todo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue"
export default {
  name: 'TodoList',
  props: ['todos'],
  methods: {
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId)
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
</style>