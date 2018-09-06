document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('button');
  deleteButton.addEventListener('click', handleDeleteButton);

})

  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    // console.log('bla');
    const newReadingListItem = document.createElement('li');
    newReadingListItem.classList.add('flex-item');


    const titleItem = document.createElement('h1');
    titleItem.textContent = this.title.value;
    newReadingListItem.appendChild(titleItem);
    const authorItem = document.createElement('h3');
    authorItem.textContent = this.author.value;
    newReadingListItem.appendChild(authorItem);
    const categoryItem = document.createElement('p');
    categoryItem.textContent = this.category.value
    newReadingListItem.appendChild(categoryItem);

    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newReadingListItem);

    this.reset();
    // OR evt.target.reset();
  };

const handleDeleteButton = function (){
  const readingList = document.querySelector('#reading-list');
  while (readingList.firstChild) {
    readingList.removeChild(readingList.firstChild);
  };


};
