// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data


var app = new Vue({
    el: "#root",
    data: {
        message: "Hello Vue!",
        immagine: "immagine-vue.png",
        contenuto_immagine: "logo-vue.js",
        clicca: "Clicca qui sotto per cambiare colore del titolo",
        bottone: "Cambia colore",
        titolo_colore: "blu"
    },
    methods: {
        cambiaColore() {
            if(this.titolo_colore == "blu"){
                this.titolo_colore = "pink";
            }else{
                this.titolo_colore = "blu";

            }
        }
    }
});
