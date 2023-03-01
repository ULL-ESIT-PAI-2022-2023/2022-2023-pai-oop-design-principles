/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Class declaration example.
 */


class Employee {
  constructor(firstName: string, lastName: string, age: number, jobTitle: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobTitle = jobTitle;
  }

  public toString(): string {
    return `${this.firstName} ${this.lastName}, ${this.age}, ${this.jobTitle}`;
  }

  getAge(): number {   // Public by default.
    return this.age;
  }
  
  private readonly firstName: string;
  private readonly lastName: string;
  private age: number;
  private jobTitle: string;
}
