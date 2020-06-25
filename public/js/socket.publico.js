var socket = io();

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
        $(`#lblTicket${i + 1}`).text('Ticket ' + ultimos4[i].numero) ;
        $(`#lblEscritorio${i + 1}`).text('Escritorio ' + ultimos4[i].escritorio);
    }
}