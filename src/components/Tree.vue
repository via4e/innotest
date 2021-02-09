<template>
  <div>
    <v-row>
      <v-col :cols="12">
        <v-btn @click="back">Return to Table Page</v-btn>
      </v-col>
    </v-row>

    <TreeView :element="current" />

  </div>
</template>

<script>
import TreeView from './View.vue'
export default {
  name: "Tree",
  components: { TreeView },
  mounted() {
    if (this.db && this.db.children.length && this.current && !this.current.id)
      this.setCurrent();
  },
  updated() {
    if (this.db && this.db.children.length && this.current && !this.current.id)
      this.setCurrent();
  },
  data: () => ({
    test: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" },
        ],
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" },
            ],
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" },
        ],
      },
    ],
  }),
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