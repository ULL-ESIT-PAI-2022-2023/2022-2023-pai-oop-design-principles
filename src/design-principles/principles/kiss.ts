/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Example of Keep It Simple Stupid.
 */

function BadIsEven(input: number) {
  const NUMBER_REGEX = /[0123456789]/;
  const INPUT_AS_TEXT = String(input);
  for (const NUMBER of INPUT_AS_TEXT) {
    if (!NUMBER_REGEX.test(NUMBER)) {
      throw new Error('Not a number.');
    }
  }
  let isEven: boolean;
  if (input % 2 === 0) {
    isEven = true;
  } else {
    isEven = false;
  }
  return isEven;
}

function GoodIsEven(input: number) {
  if (Number.isNaN(input)) {
    throw new Error('Not a number.');
  }
  return input % 2 === 0;
}
