const getRandomInt = (min, max) => {
  const minInteger = Math.ceil(Math.min(Math.abs(min),Math.abs(max)));
  const maxInteger = Math.floor(Math.max(Math.abs(min),Math.abs(max)));
  const result = Math.random() * (maxInteger - minInteger + 1) + minInteger;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const getUniqueId = (min, max) => {
  const previousValues = [];

  return function() {
    let currentValue = getRandomInt(min, max);

    if (previousValues.length >= max - min + 1) {
      window.console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }

    while(previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

export { getRandomInt, getRandomArrayElement, getUniqueId };
