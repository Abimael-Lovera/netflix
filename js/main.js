const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* ----- ------ ------ ------ Event Listener Flecha Derecha ----- ------ ------ ------ */

flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth; // scrollLeft => hace scroll hacia la derecha //el offsetWidth => Nos da el valor de nuestro ancho que estamo ocupando
  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

/* ----- ------ ------ ------ Event Listener Flecha Izquierda ----- ------ ------ ------ */

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

/* ----- ------ ------ ------ Paginación ----- ------ ------ ------ */

const numeroPaginas = Math.ceil(peliculas.length / 5); // Math.ceil Redondeo hacia arriba por ejemplo 3.2 = 4 // Math.floor redondea hacia abajo 3.2 = 3

for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');
  if (i === 0) {
    indicador.classList.add('activo');
  }
  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', e => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo'); // remover la clase activo para un indicadores
    e.target.classList.add('activo'); // añadir la clase activo a una tag
  });
}

/* ----- ------ ------ ------ Peliculas Hover ----- ------ ------ ------ */

peliculas.forEach(pelicula => {
  pelicula.addEventListener('mouseenter', e => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
