/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Magic Numbers example.
 */

function badCalculatePrice(base: number,
                           type: string) {
  if (type === 'AC524') {
    return base * 2.34;
  }
  return base * 1.58;
}

function goodCalculatePrice(base: number,
                            type: string) {
  const EXPENSIVE_MODEL = 'AC524';
  const EXPENSIVE_TAX = 2.34;
  const REGULAR_TAX = 1.58;
  if (type === EXPENSIVE_MODEL) {
    return base * EXPENSIVE_TAX;
  }
  return base * REGULAR_TAX;
}
