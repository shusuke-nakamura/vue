Vue.createApp({}).component('my-counter', {
    props: ['init'],
    template: `<div>現在は{{ state.current }}です！
    <input type="button" v-on:click="onclick" value="増加" /></div>`,
    setup(props) {
        const state = Vue.reactive({
            current: props.init,
        })
        const onclick = function() {
            state.current++
        }
        return {
            state, onclick
        }
    }
}).mount('#app')