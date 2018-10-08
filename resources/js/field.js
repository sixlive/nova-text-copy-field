import VueClipboard from 'vue-clipboard2'

Nova.booting((Vue, router) => {
    Vue.use(VueClipboard)

    Vue.component('index-text-copy', require('./components/IndexField'));
    Vue.component('detail-text-copy', require('./components/DetailField'));
    Vue.component('form-text-copy', require('./components/FormField'));
})
