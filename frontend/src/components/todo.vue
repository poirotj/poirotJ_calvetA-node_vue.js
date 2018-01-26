<template lang="html">
  <tr>
    <td> {{id}} </td>
    <td> {{content}} </td>
    <td>
      <button class="btn btn-danger" type="button" @click="delet(id)">
        Supprimer
      </button>

      <router-link :to="{ path: '/addTodo', query: { id: id, content: content } }">
        <button class="btn btn-info" type="button">
          Modifier
        </button>
      </router-link>

    </td>
  </tr>
</template>

<script>
import axios from 'axios'
import leBody from '@/components/leBody'

var config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
var params = new URLSearchParams()

export default {
  name: 'todo',
  props: [
    'id',
    'content'
  ],
  components: {
    leBody
  },
  methods: {
    delet (nomTodo) {
      params.append('id', nomTodo)
      axios.post(
        'http://localhost:3000/deletTodo',
        params,
        config,
        { withCredentials: true }
      )
        .then((response) => {
          console.log(response.data.leBody)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="css">
</style>
