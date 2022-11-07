import { Director } from './classes/director';
import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const director = new Director();
const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

director.setBuilder(mainDishBuilder).buildSimpleDish();
console.log(mainDishBuilder.getMeal(), mainDishBuilder.getPrice());
mainDishBuilder.reset();

director.setBuilder(mainDishBuilder).buildCompleteDish();
console.log(mainDishBuilder.getMeal(), mainDishBuilder.getPrice());
mainDishBuilder.reset();

director.setBuilder(veganDishBuilder).buildSimpleDish();
console.log(veganDishBuilder.getMeal(), veganDishBuilder.getPrice());
veganDishBuilder.reset();

director.setBuilder(veganDishBuilder).buildCompleteDish();
console.log(veganDishBuilder.getMeal(), veganDishBuilder.getPrice());
veganDishBuilder.reset();
