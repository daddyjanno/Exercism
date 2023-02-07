/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done."
  } else if (remainingTime === undefined) {
    return "You forgot to set the timer."
  } else {
    return "Not done, please wait."
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const noodles = layers.filter(layer => layer === "noodles");
  const sauce = layers.filter(layer => layer === "sauce");
  return {
    "noodles" : noodles.length * 50,
    "sauce" : sauce.length * 0.2
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
  console.log(myList);
}

export function scaleRecipe(recipe, numberPortion) {
  const obj = Object.fromEntries(
    Object.entries(recipe).map(([key, value]) => [key, value/2*numberPortion])
  )
  return obj;
}
