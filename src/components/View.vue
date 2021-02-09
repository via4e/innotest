<template>
  <div>
    <div class="main">
      <span v-if="isChildren">
      <v-icon large v-if="isOpen" @click="isOpen = !isOpen">mdi-minus</v-icon>
      <v-icon large v-else @click="isOpen = !isOpen">mdi-plus</v-icon>
      </span>
      {{ element.name }}
    </div>
    <ul v-if="isOpen">
      <li v-for="(item, index) in element.children">
        <TreeView :element="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import TreeView from "./View.vue";
export default {
  name: "TreeView",
  components: { TreeView },
  data: () => ({
    isOpen: false,
  }),
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isChildren() {
      if (this.element && this.element.children && this.element.children.length) return true
      return false
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}  

.main {
  margin: 20px;
  font-size: 1.2em;
  font-weight: bold;
  border: 1px solid grey;
  width: 400px;
}
</style>