<template lang="html">
  <form>

    <label for="id" >Nom</label>
    <input type="text" id="id" v-model="id"/>
    <label for="content">Description</label>
    <input type="text" id="content" v-model="content"/>

    <button type="button" @click="submit" >Ajouter</button>

  </form>
</template>

<script>
import axios from 'axios'

var config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
var params = new URLSearchParams()

export default {
  name: 'addTodo',
  data () {
    return {
      id: '',
      content: ''
    }
  },
  methods: {
    submit () {
      params.append('id', this.id)
      params.append('content', this.content)
      axios.post(
        'http://localhost:3000/addTodo',
        params,
        config,
        { withCredentials: true }
      )
        .then((response) => {
          console.log(response)
          this.$router.push('/')
        })
    }
  },
  created () {
    if (this.$route.query.id && this.$route.query.content) {
      this.id = this.$route.query.id
      this.content = this.$route.query.content
    }
  }
}
</script>

<style lang="css">
</style>
