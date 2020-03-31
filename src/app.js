import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            exchangeRates: [],
            selectedTargetRate: 0,
            conversionAmount: 0,
        },
        mounted(){
            this.getRates()
        },
        computed: {
            convertedCurrency: function(){
                return (this.conversionAmount * this.selectedTargetRate).toFixed(2);
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