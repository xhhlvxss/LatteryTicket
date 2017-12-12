import page11 from 'components/page11.vue'
import page12 from 'components/page12.vue'
import page21 from 'components/page21.vue'
import page22 from 'components/page22.vue'
import page23 from 'components/page23.vue'
import page24 from 'components/page24.vue'
import page31 from 'components/page31.vue'
import page32 from 'components/page32.vue'
import page33 from 'components/page33.vue'
import page34 from 'components/page34.vue'
import page35 from 'components/page35.vue'
import page36 from 'components/page36.vue'
import page41 from 'components/page41.vue'
import page42 from 'components/page42.vue'
import page43 from 'components/page43.vue'
import page44 from 'components/page44.vue'
import page51 from 'components/page51.vue'
import page52 from 'components/page52.vue'
import page from 'components/Page.vue'

export default [
  {
    path: '/',
    component:page,
    children:[
      { path: 'page11', component: page11 },
      { path: 'page12', component: page12 },
      { path: 'page21', component: page21 },
      { path: 'page22', component: page22 },
      { path: 'page23', component: page23 },
      { path: 'page24', component: page24 },
      { path: 'page31', component: page31 },
      { path: 'page32', component: page32 },
      { path: 'page33', component: page33 },
      { path: 'page34', component: page34 },
      { path: 'page35', component: page35 },
      { path: 'page36', component: page36 },
      { path: 'page41', component: page41 },
      { path: 'page42', component: page42 },
      { path: 'page43', component: page43 },
      { path: 'page44', component: page44 },
      { path: 'page51', component: page51 },
      { path: 'page52', component: page52 },
    ]
  }
]
