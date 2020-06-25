var socket = io();

var lblTickets = $('span[id^="lblTicket"]');
var lblEscritorios = $('span[id^="lblEscritorio"]');

console.log(lblTickets);
console.log(lblEscritorios);




socket.on('estadoActual', (data) => {
    actualizaHtml(data.ultimos4);
});


socket.on('ultimos4', (data) => {
    var audio = new Audio('audio/new-ticket.mp3') 
    audio.play();
    actualizaHtml(data.ultimos4);
});

function actualizaHtml(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {
        lblTickets[i].innerHTML = 'Ticket ' + ultimos4[i].numero;
        lblEscritorios[i].innerHTML = 'Escritorio ' + ultimos4[i].escritorio;
    }

}