import PageLoaders from '../pages/loaders/index.vue'

// const OuroBoro = () => import('../components/OuroboroCss.vue')
import OuroBoro from '../components/OuroboroCSS.vue'
const routes = [
  {
    path: '/',
    component: PageLoaders,
    children: [
      {
        path: 'ouro',
        component: OuroBoro
      }
    ]
  }
]

export default routes
