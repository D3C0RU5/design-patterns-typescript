import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

export class Director {
  private _builder: MealBuilderProtocol | null = null;

  public setBuilder(builder: MealBuilderProtocol): this {
    this._builder = builder;
    return this;
  }

  public buildSimpleDish(): void {
    this._builder?.makeMeal();
  }
  public buildDishWithBeverage(): void {
    this._builder?.makeMeal().makeBeverage();
  }
  public buildDishWithDessert(): void {
    this._builder?.makeMeal().makeDessert();
  }
  public buildCompleteDish(): void {
    this._builder?.makeMeal().makeBeverage().makeDessert();
  }
}
