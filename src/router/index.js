/*import Vue from 'vue';*/
/*import VueRouter from 'vue-router';*/
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Personajes from '../views/PersonajeList.vue';
import Personaje from '../views/PersonajePerson.vue';
import Contacto from '../views/ContactoForm.vue';
import NotFound from '../views/NotFound.vue'

/*Vue.use(VueRouter);*/

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/personajes', name: 'Personajes', component: Personajes, alias:['/people', '/characters']}, // Corrige la ruta aquí si es necesario
    { path: '/personaje/:personajeId', name: 'Personaje', component: Personaje, props: true },
    { path: '/contacto', name: 'Contacto', component: Contacto },
    { path: '/*', name: 'NotFound', component: NotFound }
   // { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound } //con esta peticion funciona pero es mas lenta
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