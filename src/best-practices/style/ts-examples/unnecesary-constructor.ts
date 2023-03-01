/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Bad constructor example following the Google Style Guide.
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

class Base {
  constructor(private value: number) {}
}

class UnnecessaryConstructor {
  constructor() {}
}
class UnnecessaryConstructorOverride extends Base {
    constructor(value: number) {
      super(value);
    }
}
