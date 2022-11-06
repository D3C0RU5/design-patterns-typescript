// AGREGATION
export class Carro{
  private motor: Motor;

  constructor(motor: Motor) {
    this.motor = motor;
  }
}

export class Motor{}

const motor = new Motor()
const carro = new Carro(motor);

console.log(carro)

// Composição é obrigatorio ter o objeto
// Agregação é opcional ter o objeto