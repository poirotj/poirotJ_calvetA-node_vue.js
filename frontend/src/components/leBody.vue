<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <todo v-for="(todo, key) in todoList" :id="todo.id" :content="todo.content" :key="key"></todo>
    </tbody>
  </table>
</template>

<script>
import todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'leBody',
  components: {
    todo
  },
  data () {
    return {
      todoList: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/todo'
    })
      .then((response) => {
        console.log(response)
        this.todoList = response.data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
</script>

<style lang="css">
</style>
