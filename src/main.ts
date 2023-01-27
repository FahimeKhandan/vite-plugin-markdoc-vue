import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import "./assets/apiDocs.scss"
import 'remixicon/fonts/remixicon.css'

import Attributes from './components/Attributes.vue'

const app = createApp(App,)
// app.component('attributes', Attributes) 
// app.component('a2aStorTable', A2aStorTable) 

   
app.mount('#app')
