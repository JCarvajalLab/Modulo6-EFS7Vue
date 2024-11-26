/*import Vue from 'vue';*/
/*import VueRouter from 'vue-router';*/
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Personajes from '../views/PersonajeList.vue';
import Personaje from '../views/PersonajePerson.vue';
import Contacto from '../views/ContactoForm.vue';

/*Vue.use(VueRouter);*/

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/personajes', name: 'Personajes', component: Personajes }, // Corrige la ruta aquí si es necesario
    { path: '/personaje/:personajeId', name: 'Personaje', component: Personaje },
    { path: '/contacto', name: 'Contacto', component: Contacto }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
/*
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
*/