<template>
  <v-app>

      <v-container fluid>
        <router-view />
      </v-container>

  </v-app>
</template>

<script>
import db from './store/db.json'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('SETDB', db)
  },
  updated () {
    this.$store.dispatch('SETDB', db)      
  }
}
</script>

<style lang="scss" scoped>
</style>