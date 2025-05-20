const parrafoCronometro = document.getElementById("cronometro");
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let velocidad = 10;
let idInterval = null
function cronometro() {
  if (idInterval !== null) return;
  function numeros() {
    if (milisegundos == 100) {
      milisegundos = 0;
    } else {
      milisegundos++;
    }
    if (milisegundos == 100) {
      segundos++;
    }
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos == 60) {
      horas++;
      minutos = 0;
    }
    //parrafoCronometro.textContent= `${minutos}:${segundos}:${milisegundos}`
    if (horas < 10) {
      parrafoCronometro.textContent = `0${horas}:`;
    } else {
      parrafoCronometro.textContent = `${horas}:`;
    }
    if (minutos < 10) {
      parrafoCronometro.textContent += `0${minutos}:`;
    } else {
      parrafoCronometro.textContent += `${minutos}:`;
    }
    if (segundos < 10) {
      parrafoCronometro.textContent += `0${segundos}:`;
    } else {
      parrafoCronometro.textContent += `${segundos}:`;
    }
    if (milisegundos < 10) {
      parrafoCronometro.textContent += `0${milisegundos}`;
    } else {
      parrafoCronometro.textContent += `${milisegundos}`;
    }
  }
 idInterval = setInterval(numeros, velocidad);
}

function resetear() {
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  parrafoCronometro.textContent = `00:00:00:00`
}
function pausar() {
    clearInterval(idInterval);
    idInterval = null;
  }
const btniniciar = document.getElementById("iniciar");
const btnpausar = document.getElementById("pausar");
const btnresetear = document.getElementById("resetear");

btniniciar.addEventListener("click", cronometro);
btnresetear.addEventListener("click", resetear);
btnpausar.addEventListener("click", pausar);
