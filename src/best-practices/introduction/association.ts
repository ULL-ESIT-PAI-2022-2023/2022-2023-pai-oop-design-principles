/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Class association example.
 */

class AClass {
  sayHi(): void {
    console.log('Hi!');
  }
  sayBye(obj: BClass): void {
    obj.sayBye();
  }
}

class BClass {
  sayBye(): void {
    console.log('Bye!');
  }
  sayHi(obj: AClass): void {
    obj.sayHi();
  }
}

const hi = new AClass();
const bye = new BClass();
hi.sayHi();
bye.sayHi(hi);
hi.sayBye(bye);
bye.sayBye();