interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newPerson = new Person(this.name, this.age);
    newPerson.addresses = this.addresses.map((item) => item.clone());
    return newPerson;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    const newAddress = new Address(this.street, this.number);
    return newAddress;
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Carlos', 27);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Outro';

console.log(person1.addresses[0].street, person2.addresses[0].street);
