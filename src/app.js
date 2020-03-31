import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            exchangeRates: [],
            selectedTargetRate: 0,
            selectedStartRate: 0,
            conversionAmount: 0,
        },
        mounted(){
            this.getRates()
        },
        computed: {
            conversionResult: function(){
                return ( ( (1 / this.selectedStartRate) * this.selectedTargetRate) * this.conversionAmount ).toFixed(2);
                // return (this.conversionAmount * this.selectedTargetRate).toFixed(2);
             },
        },
        methods: {
            getRates: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(result => result.json())
                .then(result => this.exchangeRates = result.rates)
            }
        }

    })
});