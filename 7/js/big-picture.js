const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const commentShownCount = bigPictureContainer.querySelector('.social__comment-shown-count');
const commentTotalCout = bigPictureContainer.querySelector('.social__comment-total-count');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption');
const commentsLoaderButton = bigPictureContainer.querySelector('.comments-loader');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');

const createComment = ({avatar, name, message}) => {
  const socialComment = document.createElement('li');
  socialComment.classList.add('social__comment');

  const socialPicture = document.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;
  socialPicture.width = 35;
  socialPicture.height = 35;

  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = message;

  socialComment.append(socialPicture, socialText);

  return socialComment;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsFragment.appendChild(createComment(comment));
  });

  commentsList.innerHTML = '';
  commentsList.appendChild(commentsFragment);
};

const onCloseButtonClick = () => {
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeButton.removeEventListener('click',onCloseButtonClick);
  document.body.removeEventListener('keydown', onEscKeydown);
}

const openBigPicture = ({url, description, likes, comments}) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentTotalCout.textContent = comments.length;
  bigPictureDescription.textContent = description;

  renderComments(comments);

  commentShownCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeButton.addEventListener('click', onCloseButtonClick);
  document.body.addEventListener('keydown', onEscKeydown);
};

export { openBigPicture };
