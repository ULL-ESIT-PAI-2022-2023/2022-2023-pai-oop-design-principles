/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc How to use parameters in a constructor following the Google Style Guide.
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

class BadTeam {
  #size: number;
  constructor(size: number) {
    this.#size = size;
  }
}

class GoodTeam {
  constructor(private size: number) {}
}