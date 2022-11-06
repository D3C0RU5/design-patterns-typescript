import { Singleton } from './criacional/creational';

class A {
  static get(): Singleton {
    return Singleton.instance;
  }
}
class B {
  static get(): Singleton {
    return Singleton.instance;
  }
}

console.log(A.get() === B.get());
