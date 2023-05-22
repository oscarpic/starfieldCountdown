function actualizarContador() {
  var fechaActual = new Date();
  var fechaLanzamiento = new Date("September 6, 2023 00:00:00");

  var diferenciaTiempo = fechaLanzamiento - fechaActual;

  var segundos = Math.floor((diferenciaTiempo / 1000) % 60);
  var minutos = Math.floor((diferenciaTiempo / 1000 / 60) % 60);
  var horas = Math.floor((diferenciaTiempo / (1000 * 60 * 60)) % 24);
  var dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

actualizarContador(); // Llamar a la función para mostrar el contador inicialmente

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
