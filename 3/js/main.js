const NAMES = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Елена',
  'Иван',
  'Анна',
  'Николай',
  'Ольга',
  'Сергей',
  'Татьяна'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const DESCRIPTIONS = [
  'Фотография с естественным освещением и мягкими тенями.',
  'Крупный план, передающий детали и текстуру объекта.',
  'Атмосферный кадр с нейтральным фоном.',
  'Динамичная композиция с акцентом на главный объект.',
  'Минималистичное изображение с чистыми линиями.',
  'Тёплая цветовая палитра и уютное настроение.',
  'Контрастный кадр с выразительной светотенью.',
  'Стильная фотография с акцентом на форму и цвет.',
  'Живой момент, запечатлённый в естественной обстановке.',
  'Эстетичный снимок с продуманной композицией.'
];

const getRandomInt = (min, max) => {
  const minInteger = Math.ceil(Math.min(Math.abs(min),Math.abs(max)));
  const maxInteger = Math.floor(Math.max(Math.abs(min),Math.abs(max)));
  const result = Math.random() * (maxInteger - minInteger + 1) + minInteger;

  return Math.floor(result);
};

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

const generatePhotoId = getUniqueId(1, 25);
const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];


const generateComments = () => {
  const generateCommentId = getUniqueId(1, 1000);

  const generateComment = () => ({
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: Array.from({length: getRandomInt(1, 2)}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: getRandomArrayElement(NAMES)
  });

  const commentsCount = getRandomInt(0, 30);

  return Array.from({length: commentsCount}, generateComment);
};

const generatePhoto = () => {
  const photoId = generatePhotoId();

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`, //url картинки число от 1 до 25, не должны повторяться
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: generateComments()
  };
};

const generatePhotos = () => Array.from({length: 25}, generatePhoto);

window.console.log(generatePhotos());
