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
    const newReadingListItem = document.createElement('div');
    newReadingListItem.textContent = `${this.title.value}, ${this.author.value}, ${this.category.value}`
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
