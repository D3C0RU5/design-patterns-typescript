import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Bean, Beverage, Dessert, Pasta, Rice, Salat } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const bean = new Bean('Feijão', 6);
    const salat = new Salat('Salada', 2);
    const pasta = new Pasta('Macarrão', 6);
    this._meal.add(rice, bean, salat, pasta);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Coca', 8);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 10);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
