// https://dev.to/coolgoose/how-to-setup-font-awesome-5-as-vuecomponent-in-nuxtjs-54e4
import Vue from 'vue'
// the component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// the library
// https://git.io/fNCzJ
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

// asociate it to the library, if you need to add more you can separate them by a comma
// fontawesome.library.add(solid)
// fontawesome.library.add(regular)
// fontawesome.library.add(brands)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)