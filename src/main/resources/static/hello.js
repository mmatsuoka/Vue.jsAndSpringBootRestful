/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = new Vue({
    el: '#app',
    data: {
        
        barcodeData : '',
        message: 'ほえほえ Hello Vue!',

        name: 'みかん',
        price: 100,

        items: [
            {
                name: 'みかん',
                price: 100
            },
            {
                name: 'もも',
                price: 300
            },
            {
                name: 'いちじく',
                price: 500
            },
            {
                name: 'メロン',
                price: 1000
            }
        ]


    },

    computed: {
        priceWithTax: function () {
            return this.price * 1.08;
        },

        isValid: function () {
            return this.message.length > 0;
        }
    }
    ,

    methods: {
        updateName: function (event) {
            this.name = event.target.value;
        },

        sendData: function (text) {
            alert("データ送信！" + text);
        },


    }
})