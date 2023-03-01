/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Visibility annotations example following the Google Style Guide.
 * @see {@link https://google.github.io/styleguide/jsguide.html}
 */

'use strict';

class Car {
  constructor(plate, color, brand) {
    /** @private @const {string} */
    this.plate_ = plate;
    /** @protected {string} */
    this.color = color;
    // Public fields do not need visibility annotations.
    this.brand = brand;
  }
}
