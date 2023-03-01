/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Example of bad usage of `this` in a static method.
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

class Store {
  static storage: string[] = [];
  static isAvailable(item: string): boolean {
    return this.storage.includes(item);
  }
}
