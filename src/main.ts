import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub,faVuejs,faJs,faUnity,faCss3,faApple,faAndroid,faReact } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';

library.add(fas,faLinkedin,faGithub,faVuejs,faJs,faUnity,faCss3,faApple,faAndroid,faReact);

const app = createApp(App);
AOS.init();
app.component('fa', FontAwesomeIcon)
app.mount('#app');
