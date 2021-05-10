import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
          {
            path: 'cadastrar-usuario',
            name: 'usuarios',
            props: () => ({editing: false}),
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/CadastrarUsuario.vue'
              ),
          },
          {
            path: 'editar-usuario',
            name: 'editar-usuario',
            props: () => ({editing: true}),
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/CadastrarUsuario.vue'
              ),
          },
          {
            path: 'cadastrar-restaurante',
            name: 'restaurante',
            props: () => ({editing: false}),
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/CadastrarRestaurante.vue'
              ),
          },
          {
            path: 'editar-restaurante',
            name: 'editar-restaurante',
            props: () => ({editing: true}),
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/CadastrarRestaurante.vue'
              ),
          },
          {
            path: 'cadastrar-cardapio',
            name: 'cadastrar-cardapio',
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/CadastrarCardapio.vue'
              ),
          },
          {
            path: 'listar-usuarios',
            name: 'listar-usuarios',
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/ListarUsuarios.vue'
              ),
          },
          {
            path: 'listar-restaurantes',
            name: 'listar-restaurantes',
            component: () =>
              import(
                /* webpackChunkName: 'home' */
                '@/components/ListarRestaurantes.vue'
              ),
          },
        ],
      },
]


const router = new VueRouter({
    mode: 'hash',
    base: "/",
    linkActiveClass: 'is-active',
    routes,
})


export default router