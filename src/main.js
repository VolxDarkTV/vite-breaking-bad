/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

import Loader from './components/Loader.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircle, faCircleDot, faRecycle, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faRecycle)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon, Loader)
.mount('#app')
