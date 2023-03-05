/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Example of You Aren’t Going to Need It
 */

class badCar {
  constructor(private plate: string,
              private brand: string) {}
  getPlate(): string {
    return this.plate;
  }
  setPlate(plate: string): void {
    this.plate = plate;
  }
  getBrand(): string {
    return this.brand;
  }
  setBrand(brand: string): void {
    this.brand = brand;
  }
  /** More public methods */
}

class goodCar {
  constructor(private plate: string,
              private brand: string) {}
  /** More public methods */
}