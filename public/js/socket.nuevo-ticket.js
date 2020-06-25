
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});



$('button').on('click', function() {
    console.log('click');
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});