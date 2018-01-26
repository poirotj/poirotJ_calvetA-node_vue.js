<template>
  <div id="app">
    <leHeader></leHeader>
    <div class="container">
      <router-view/>
    </div>
    <leFooter></leFooter>
  </div>
</template>

<script>
import leHeader from '@/components/header'
import leFooter from '@/components/leFooter'

export default {
  name: 'App',
  components: {
    leHeader,
    leFooter
  }
}
</script>

<style>
</style>
