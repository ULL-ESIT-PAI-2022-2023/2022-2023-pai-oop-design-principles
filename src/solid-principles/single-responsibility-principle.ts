/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Single-responsibility principle example.
 */

/**
 * @desc Prints the square of the factorial of a number.
 * @param operand The number to print the square of the factorial.
 */
function printSquareOfFactorial(operand: number): void {
  let factorial: number = 1;
  for (let i: number = 1; i <= operand; i++) {
    factorial *= i;
  }
  console.log(factorial * factorial);
}

/**
 * @desc Calculates the factorial of a number.
 * @param operand The number to calculate the factorial.
 * @return The factorial of the number.
 */
function factorial(operand: number): number {
  let factorial: number = 1;
  for (let i: number = 1; i <= operand; i++) {
    factorial *= i;
  }
  return factorial;
}

/**
 * @desc Calculates the square of a number.
 * @param operand The number to calculate the square.
 * @return The square of the number.
 */
function square(operand: number): number {
  return operand * operand;
}

// Does not follow the single-responsibility principle.
printSquareOfFactorial(5);

// Follows the single-responsibility principle.
console.log(square(factorial(5)));