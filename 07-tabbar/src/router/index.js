import Vue from 'vue'
import Router from 'vue-router'
import Category from "../views/category/Category";

// const Home = () =>import('../views/home/Home');
// const Category = () =>import('../views/category/Category');
// const Shopcar = () =>import('../views/shopcar/Shopcar');
// const Profile = () =>import('../views/profile/Profile');

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'/home',
    component:() =>import('../views/home/Home')
  },
  {
    path:'/category',
    component:() =>import('../views/category/Category')
  },
  {
    path:'/shopcar',
    component:() =>import('../views/shopcar/Shopcar')
  },
  {
    path:'/profile',
    component:() =>import('../views/profile/Profile')
  }
]
export default new Router({
  routes,
  //显示路径时默认hash模式，但我们想要history模式
  mode:'history'
})


