import { getRandomInt, getRandomArrayElement, getUniqueId } from './util';

const DATA = {
  photoCount: 25,

  photoId: {
    min: 1,
    max: 25
  },

  commentId: {
    min: 1,
    max: 1000
  },

  comments: {
    minCount: 0,
    maxCount: 30
  },

  messageParts: {
    minCount: 1,
    maxCount: 2
  },

  avatar: {
    minNumber: 1,
    maxNumber: 6
  },

  likes: {
    minCount: 15,
    maxCount: 200
  }
};

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

const generatePhotoId = getUniqueId(DATA.photoId.min, DATA.photoId.max);
const generateCommentId = getUniqueId(DATA.commentId.min, DATA.commentId.max);

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(DATA.avatar.minNumber, DATA.avatar.maxNumber)}.svg`,
  message: Array.from({length: getRandomInt(DATA.messageParts.minCount, DATA.messageParts.maxCount)}, () => getRandomArrayElement(MESSAGES)).join(' '),
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => {
  const commentsCount = getRandomInt(DATA.comments.minCount, DATA.comments.maxCount);

  return Array.from({length: commentsCount}, generateComment);
};

const generatePhoto = () => {
  const photoId = generatePhotoId();

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(DATA.likes.minCount, DATA.likes.maxCount),
    comments: generateComments()
  };
};

const generatePhotos = () => Array.from({length: DATA.photoCount}, generatePhoto);

export { generatePhotos };
