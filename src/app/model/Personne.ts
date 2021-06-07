import { ThrowStmt } from '@angular/compiler';

export class Personne {
  id: number;
  name: string;
  firstName: string;
  age: number;
  fonction: string;

  constructor(id = 0, name = '', firstName = '', age = 0, fonction = '') {
    this.id = id;
    this.age = age;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.fonction = fonction;
  }
}
