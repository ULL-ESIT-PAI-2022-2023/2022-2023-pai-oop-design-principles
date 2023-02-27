/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Constructor example following the Google Style Guide.
 * @see {@link https://google.github.io/styleguide/jsguide.html}
 */

'use strict';

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }
}
