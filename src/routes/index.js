import Home from '../components/Home.vue'
import Tree from '../components/Tree.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tree/:id', component: Tree },
]

export default routes
