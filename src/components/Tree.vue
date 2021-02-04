<template>
  <div>
    <v-row>
      <v-col :cols="12">
        <v-btn @click="back">Return to Table Page</v-btn>
      </v-col>
      <v-col :cols="12">
        <v-treeview
          :items="current.children"
          selectable
          item-disabled="locked"
        ></v-treeview>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Tree",
  mounted() {
    if (this.db && this.db.children.length && this.current && !this.current.id)
      this.setCurrent();
  },
  updated() {
    if (this.db && this.db.children.length && this.current && !this.current.id)
      this.setCurrent();
  },
  computed: {
    db() {
      return this.$store.state.db;
    },
    current() {
      return this.$store.state.current;
    },
  },
  methods: {
    back(e) {
      this.$router.push("/");
    },
    setCurrent() {
      // Если зашли по прямой ссылке, установить текущий узел, взяв id из url
      let id = this.$route.params.id * 1; // id корневого элемента
      console.log(this.$route.params.id, this.current.id, this.db.children);
      if (id != this.current.id && this.db && this.db.children.length) {
        console.log("db", this.db);
        let current = this.db.children.find((e) => id === e.id);
        console.log("current", current);
        if (current) this.$store.commit("SETCURRENT", current);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>