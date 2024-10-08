import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';


//Khởi tạo ứng dụng các tiện ích bên ngoài
const app = createApp(App);

// sủw dụng các tiện ích bên ngoài
app.use(router);

//Gán giao diện vào App
app.mount("#app");