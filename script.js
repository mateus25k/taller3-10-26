document.getElementById('miBoton').addEventListener('click', function() {
    const mensaje = document.getElementById('mensajeJS');
    mensaje.textContent = "¡Funcionalidad JS ejecutada con éxito! Fecha actual: " + new Date().toLocaleDateString();
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
});
