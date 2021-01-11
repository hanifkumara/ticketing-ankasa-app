import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Swal from 'sweetalert2'

// Auth
import MainAuth from '../views/auth/MainAuth.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Forgot from '../views/auth/Forgot.vue'
import CreateNewPass from '../views/auth/CreateNewPass.vue'

// Main
import Main from '../views/main/Main.vue'
import Ticket from '../views/main/ticket/Ticket.vue'
import DetailTicket from '../views/main/ticket/DetailTicket.vue'
import MyBook from '../views/main/book/MyBook.vue'
import DetailBook from '../views/main/book/DetailBook.vue'

// Profile
import Profile from '../views/main/user/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/auth',
    name: 'MainAuth',
    component: MainAuth,
    redirect: '/auth/login',
    meta: {
      requiresVisitor: true
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'signup',
        name: 'Signup',
        component: Signup,
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: Forgot,
        meta: {
          requiresVisitor: true
        }
      },
      {
        path: 'createnewpass/:token',
        name: 'CreateNewPass',
        component: CreateNewPass,
        meta: {
          requiresVisitor: true
        }
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: '/main/ticket',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'search',
        name: 'Landing',
        component: Landing,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'mybook',
        name: 'MyBook',
        component: MyBook,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'mybook/:id',
        name: 'DetailBook',
        component: DetailBook,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'ticket',
        name: 'Ticket',
        component: Ticket,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'ticket/:id',
        name: 'DetailTicket',
        component: DetailTicket,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/auth/login'
      })
      Swal.fire('You must login', '', 'error')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token')) {
      next({
        path: '/main/search'
      })
      Swal.fire('You alreadry login', '', 'error')
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
