
import Search from "@/Baitap/Bai3/Search.vue";
import Dashboard from "@/Baitap/Bai5/Dashboard.vue";
import Logon from "@/Baitap/Bai5/Logon.vue";
import Products from "@/Baitap/Bai6/Products.vue";
import Settings from "@/Baitap/Bai6/Settings.vue";
import Users from "@/Baitap/Bai6/Users.vue";
import ListPost from "@/Baitap/Bai7/ListPost.vue";
import PostDetail from "@/Baitap/Bai7/PostDetail.vue";
import PostNotFound from "@/Baitap/Bai7/PostNotFound.vue";
import ListProduct from "@/Baitap/Bai8/ListProduct.vue";
import ProductDetail from "@/Baitap/Bai8/ProductDetail.vue";
import { createRouter, createWebHistory } from "vue-router";


const posts = [
    { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
    { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
    { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3' },
  ];
  // B1 : Định nghĩa danh sách các route
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: ["/home", "/homepage", "/trang-chu"] ,
            component: import( /* WebpankChunkName: "home"*/ "@/views/HomePage.vue"),
            name: "home",
            redirect: "/about"
        },
           
        {
            path: "/contact",
            component: import( /* WebpankChunkName: "contact"*/ "@/views/ContactPage.vue"),
            name: "contact",
        },
           
        {
            path: "/about",
            component: import( /* WebpankChunkName: "about"*/ "@/views/AboutPage.vue"),
            name: "about",
            redirect: "/feedback"
        },
        
        {
            path: "/feedback",
            component: import( /* WebpankChunkName: "feedback"*/ "@/views/Feedback.vue"),
            name: "feedback",
        },
        
        {
            path: "/user/:id",
            component: import( /* WebpankChunkName: "UserPage"*/ "@/views/UserPage.vue"),
            name: "UserPage",
            redirect: (to) => `/profile/${to.params.id}`,
        
        },
        {
            path: "/profile/:id",
            component: import( /* WebpankChunkName: "ProfilePage"*/ "@/views/ProfilePage.vue"),
            name: "ProfilePage"
        
        },
        {
            path: "/listproduct",
            component: import( /* WebpankChunkName: "ListProduct"*/ "@/views/ListProduct.vue"),
            name: "ListProduct"
        
        },
        {
            path: "/:pathMatch(.*)*",
            component: import( /* WebpankChunkName: "notFound"*/ "@/views/NotFound.vue"),
            name: "NotFound"
        
        },
        {
            path: "/admin",
            component: import( /* WebpankChunkName: "admin"*/ "@/views/ListProduct.vue"),
            name: "admin",
            beforeEnter: (to,from,next) => {
                const isAuthentication = true ;
                
                if(isAuthentication){
                    //cho phép chuyển vào phần admin
                    next();
                }else{
                    next({name : "login"});
                }
            },
            children:[
                {
                    path: "manager-user",
                    component : import( /* WebpankChunkName: "ManagerUser"*/ "@/views/ManagerProduct.vue"),
                    name: "ManagerUser"
                },
                
                {
                    path: "manager-product",
                    component : import( /* WebpankChunkName: "ManagerProduct"*/ "@/views/ManagerProduct.vue"),
                    name: "ManagerProduct"
                },
                
              
            ]
        
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
          },
          {
            path: '/login',
            name: 'Login',
            component: Logon,
          },
          {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true }, // Đặt meta để yêu cầu bảo vệ trang
          },
          {
            path: '/admin',
            component: Admin,
            children: [
              {
                path: '',
                name: 'Dashboard',
                component: { template: '<h2>Dashboard Page</h2><p>Khi truy cập đường dẫn /admin</p>' },
              },
              {
                path: 'manager-user',
                name: 'Users',
                component: Users,
              },
              {
                path: 'manager-product',
                name: 'Products',
                component: Products,
              },
              {
                path: 'settings',
                name: 'Settings',
                component: Settings,
              },
            ],
          },
          {
            path: '/posts',
            name: 'ListPost',
            component: ListPost,
          },
          {
            path: '/posts/:id',
            name: 'PostDetail',
            component: PostDetail,
            beforeEnter: (to, from, next) => {
              const postExists = posts.find(post => post.id === Number(to.params.id));
              if (postExists) {
                next();
              } else {
                next('/not-found'); // Điều hướng đến trang PostNotFound nếu bài viết không tồn tại
              }
            },
          },
          {
            path: '/not-found',
            name: 'PostNotFound',
            component: PostNotFound,
          },
          {
            path: '/:catchAll(.*)', 
            redirect: '/not-found',
          },
          {
            path: '/list-product',
            name: 'ListProduct',
            component: ListProduct
          },
          {
            path: '/product-detail/:id',
            name: 'ProductDetail',
            component: ProductDetail
          },

    
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition; 
        } else if (to.name === 'PostDetail') {
          return { top: window.innerHeight / 2 }; 
        } else if (to.name === 'PostNotFound') {
          return { top: 0 }; 
        } else {
          return { top: 0 }; 
        }
      },
});

    
 
export default router;