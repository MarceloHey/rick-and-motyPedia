import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Characters from '../views/Characters.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "character" */ '../views/Home.vue'),
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/character/:characterId',
    name: 'Character',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "character" */ '../views/CharacterDetails.vue'
      ),
  },
  {
    path: '/episode/:episodeId',
    name: 'Episode',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "character" */ '../views/EpisodeDetails.vue'),
  },
  {
    path: '/episodes',
    name: 'Episodes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue'),
  },
  {
    path: '/locations',
    name: 'Locations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "locations" */ '../views/Locations.vue'),
  },
  {
    path: '/location/:locationId',
    name: 'Location',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "location" */ '../views/LocationDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
