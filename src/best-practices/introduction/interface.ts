/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Adriano dos Santos Moreira
 * @author Miguel Luna García
 * @since Feb 27 2023
 * @desc Interface example.
 */

interface Person {
  firstName: string;
  lastName: string;
  occupation?: string;
}

class Employee implements Person {
  constructor(
    public readonly firstName: string, 
    public readonly lastName: string, 
    public readonly occupation: string
  ) {}
}

class Student implements Person {
  constructor(
    public readonly firstName: string, 
    public readonly lastName: string
  ) {}
}

function printInfo(person: Person) {
  console.log(`${person.firstName} ${person.lastName}, ` +
    (person.occupation ? person.occupation : 'Student'));
}

printInfo(new Employee('John', 'Doe', 'Teacher'));
printInfo(new Student('Jane', 'Doe'));