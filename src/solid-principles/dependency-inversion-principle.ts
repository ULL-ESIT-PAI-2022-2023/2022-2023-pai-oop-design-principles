/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Dependency inversion principle example.
 */

/**
 * @desc Interface that defines the methods of a filtered coffee machine.
 */
interface FilteredCoffee {
  makeFilteredCoffee(): void;
}

/**
 * @desc Interface that defines the methods of an espresso coffee machine.
 */
interface EspressoCoffee {
  makeEspressoCoffee(): void;
}

/**
 * @desc Coffee machine that only does filtered coffee.
 */
class BasicCoffeeMachine implements FilteredCoffee {
  makeFilteredCoffee(): void {
    console.log('Making filtered coffee');
  }
}

/**
 * @desc Coffee machine that does both filtered and espresso coffee.
 */
class PremiumCoffeeMachine implements FilteredCoffee, EspressoCoffee {
  makeFilteredCoffee(): void {
    console.log('Making filtered coffee');
  }
  makeEspressoCoffee(): void {
    console.log('Making espresso coffee');
  }
}

/**
 * @desc Function that makes filtered coffee.
 * @param coffeeMachine Coffee machine that makes filtered coffee.
 */
function makeFilteredCoffee(coffeeMachine: FilteredCoffee): void {
  coffeeMachine.makeFilteredCoffee();
}

makeFilteredCoffee(new BasicCoffeeMachine());
makeFilteredCoffee(new PremiumCoffeeMachine());