
const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const renderSuccessMessage = () => {
  const successClone = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', successClone);

  document.addEventListener ('keydown', (evt) => {
    if (isEscKey(evt)) {
      successClone.remove();
    }
  });
  document.addEventListener('click', () => {
    successClone.remove();

  });
};


const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const renderErrorMessage = () => {
  const errorClone = errorTemplate.cloneNode(true);
  errorClone.classList.add('show-popup');
  document.body.insertAdjacentElement('beforeend', errorClone);

  document.addEventListener ('keydown', (evt) => {
    if (isEscKey(evt)) {
      errorClone.remove();
    }
  });
  document.addEventListener('click', () => {
    errorClone.remove();

  });
};

export {renderSuccessMessage, renderErrorMessage};
