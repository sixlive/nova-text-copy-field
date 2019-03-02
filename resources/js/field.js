Nova.booting((Vue, router) => {
    Vue.component('index-text-copy', require('./components/IndexField'));
    Vue.component('detail-text-copy', require('./components/DetailField'));
    Vue.component('form-text-copy', require('./components/FormField'));
})
