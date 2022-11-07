interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newPerson = Object.create(this);
    return newPerson;
  }
}
