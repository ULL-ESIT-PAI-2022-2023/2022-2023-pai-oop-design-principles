/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Class aggregation and composition example.
 */

class AClass {
  sayHi(): void {
    console.log('Hi!');
  }
}

// Aggregation
class BClass {
  constructor(private aClass?: AClass) {}
  sayHi(): void {
    if (this.aClass) this.aClass.sayHi();
  }
}

// Composition
class CClass {
  sayHi(): void {
    this.aClass.sayHi();
  }
  private aClass = new AClass();
}
