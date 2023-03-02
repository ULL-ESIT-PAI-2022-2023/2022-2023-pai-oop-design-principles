/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Open-closed principle example.
 */

/**
 * @class Calculator
 * @desc Does operations with two numbers.
 * @param operand1 The first number.
 * @param operand2 The second number.
 */
class Calculator {
  calculate(operator: CalculatorOperation): number {
    return operator.execute();
  }
}

/**
 * @interface CalculatorOperation
 * @desc Interface for operations with two numbers.
 */
interface CalculatorOperation {
  execute(): number;
}

/**
 * @class Addition
 * @desc Adds two numbers.
 * @param operand1 The first number.
 * @param operand2 The second number.
 */
class Addition {
  constructor(private operand1: number, private operand2: number) {}
  execute(): number {
    return this.operand1 + this.operand2;
  }
}

/**
 * @class Subtraction
 * @desc Subtracts two numbers.
 * @param operand1 The first number.
 * @param operand2 The second number.
 * @return The result of the subtraction.
 */
class Subtraction implements CalculatorOperation {
  constructor(private operand1: number, private operand2: number) {}
  execute(): number {
    return this.operand1 - this.operand2;
  }
}

// We can add new operations without modifying the Calculator class.
// We just need an object with the execute method.

let calculator: Calculator = new Calculator();
console.log(calculator.calculate(new Addition(5, 5)));
console.log(calculator.calculate(new Subtraction(5, 5)));