require('./bootstrap');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
// import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

const app = document.getElementById('app');

new Vue({
    vuetify: new Vuetify({
        theme: {
            // // default
            // themes: {
            //     light: {
            //         accent: "#82B1FF",
            //         error: "#FF5252",
            //         info: "#2196F3",
            //         primary: "#1976D2",
            //         secondary: "#424242",
            //         success: "#4CAF50",
            //         warning: "#FB8C00",
            //     },
            //     dark: {
            //         accent: "#FF4081",
            //         error: "#FF5252",
            //         info: "#2196F3",
            //         primary: "#2196F3",
            //         secondary: "#424242",
            //         success: "#4CAF50",
            //         warning: "#FB8C00",
            //     },
            // },
            // // end default
            // // bulma
            themes: {
                light: {
                    primary: "#00d1b2",
                    secondary: "#424242",
                    success: "#4CAF50",
                    warning: "#FB8C00",
                    accent: "#82B1FF",
                    error: "#FF5252",
                    info: "#2196F3",
                },
                dark: {
                    primary: colors.teal.accent4,
                },
            },
            // end bulma
        },
    }),
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
