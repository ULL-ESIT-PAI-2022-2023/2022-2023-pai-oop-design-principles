/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Class inheritance example.
 */

class AClass {
  constructor(private attributeA: number) {}
  getAttributeA(): number {
    return this.attributeA;
  }
}

class BClass extends AClass {
  constructor(attributeA: number, private attributeB: number) {
    super(attributeA);
  }
  getAttributeB(): number {
    return this.attributeB;
  }
}