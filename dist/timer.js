export default function timer() {
    const opciones = {
        iconUrl: "url_a_un_icono" /* (opcional) aún no implementado */,
        body: "Contenido del cuerpo de la notificación" /* (opcional) si se omite el título será el cuerpo */,
        tag: "Oye" /* (opcional) Nunca habrá dos notificaciones con la misma etiqueta, así que cuando se muestre se cerrarán las otras que tengan la misma etiqueta */,
    };
    // Creamos la notificación
    var notification = new window.Notification("Título", opciones);
    // La mostramos
    notification.show();
}
