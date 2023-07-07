import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import CharactersLayout from '@/layouts/CharactersLayout.vue';
import CharacterById from '@/components/characters/CharacterById.vue';
import CharacterList from '@/components/characters/CharacterList.vue';
import CharacterSearch from '@/components/characters/CharacterSearch.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      active: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      active: false
    }
  },
  {
    path: '/characters',
    redirect: '/characters/list',
    component: CharactersLayout,
    meta: { active: false, name: 'characters' },
    children: [
      {
        path: 'id/:id',
        name: 'characterId',
        component: CharacterById,
        meta: {
          active: false
        }
      },
      {
        path: 'list',
        name: 'characterList',
        component: CharacterList,
        meta: {
          active: false
        }
      },
      {
        path: 'search',
        name: 'characterSearch',
        component: CharacterSearch,
        meta: {
          active: false
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: () => ({ name: 'home' })
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
