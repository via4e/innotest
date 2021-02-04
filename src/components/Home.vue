<template>
  <div>
    <v-row class="ma-8">
      <v-col :cols="12"  class="ma-8 text-center">
          Table Page
      </v-col>
      <v-col :cols="2"></v-col>
      <v-col :cols="8">
        <v-data-table
          :headers="headers"
          :items="db.children"
          :items-per-page="15"
          class="elevation-1"
          @click:row="showTree($event)"
        ></v-data-table>
      </v-col>
      <v-col :cols="2"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "name", value: "name" },
      { text: "email", value: "email" },
      { text: "condition", value: "condition" },
      { text: "adress", value: "Adresses" },
    ],
  }),
  computed: {
    db() {
      return this.$store.state.db;
    },
  },
  methods: {
    showTree (ev){
        //console.log(ev.id)
        this.$router.push('/tree/' + ev.id)
        this.$store.commit('SETCURRENT', ev)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>