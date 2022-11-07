interface Prototype {
  addresses: Address[];
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Prototype {
    const newPerson = Object.create(this);

    return newPerson;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Carlos', 27);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Outro';

console.log(person1.addresses, person2.addresses, person1 === person2);
