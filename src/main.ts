import 'virtual:uno.css'
import './styles/index.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'


import { VueQueryPlugin } from '@tanstack/vue-query'


import App from '@/App.vue'

import PrimeVue from 'primevue/config';
import { ThemePreset } from './config/theme';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';

import { createI18n } from 'vue-i18n'


import { router } from './router';
import { en } from './locales/en'
import { ar } from './locales/ar'


const i18n = createI18n({
    legacy: false,
    locale: '',
    messages: {
        en:en,
        ar:ar
    },
  })


const pinia = createPinia()

const app = createApp(App)


app.use(i18n)

app.use(pinia)
app.use(router)

app.use(VueQueryPlugin)
app.use(PrimeVue, {
    theme: {
        preset: ThemePreset,
        options: {
            darkModeSelector: '.dark-mode',
        }
    }
})
app.directive('tooltip', Tooltip);
app.use(ToastService);

app.mount('#app')

