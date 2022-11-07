export class Prototype {
  public primitive = 0;
  public component: object = {};
  public circularReference: ComponentWithBackReference =
    new ComponentWithBackReference(this);

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    return clone;
  }
}

export class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}
