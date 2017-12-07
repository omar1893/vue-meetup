import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Profile from '@/components/user/profile'
import SignIn from '@/components/user/signin'
import SignUp from '@/components/user/signup'
import CreateMeetup from '@/components/meetup/createMeetup'
import Meetups from '@/components/meetup/meetups'
import Meetup from '@/components/meetup/meetup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/create',
      name: 'create',
      component: CreateMeetup
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props:true,
      component: Meetup
    },
  ],
  mode:'history'
})
