Vue.createApp({}).component('my-counter', {
    props: ['init'],
    template: `<div>現在は{{ current }}です！
    <input type="button" v-on:click="onclick" value="増加" /></div>`,
    setup(props) {
        const current = Vue.ref(props.init)
        const onclick = function() {
            current.value++
        }
        return {
            current, onclick
        }
    }
}).mount('#app')