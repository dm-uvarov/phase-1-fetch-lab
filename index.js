function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // let resp = fetch('https://anapioficeandfire.com/api/books')
  //   .then(r => r.json())
  //   .then(sObj => sObj.map(book => book.name));


  return fetch('https://anapioficeandfire.com/api/books')
    .then(r => r.json())
    .then(sObj => renderBooks(sObj))

  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
