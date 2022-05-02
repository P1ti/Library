let addNew = document.querySelector('.addNew');
let container = document.querySelector('.container');
let cancelBtn = document.querySelector('#cancelBtn');
let containerBook = document.getElementById('container-book');
const form = document.querySelector('.container-form');

cancelBtn.addEventListener('click', (e) => {
  if (form && !form.classList.contains('hideIt')) {
    form.classList.add('hideIt');
    container.classList.remove('hideIt');
  }
  else {
    form.classList.remove('hideIt');
    container.classList.add('hideIt')
  }
});

addNew.addEventListener('click', (e) => {
  if (form && form.classList.contains('hideIt')) {
    form.classList.remove('hideIt');
    container.classList.add('hideIt');
  }
  else {
    form.classList.add('hideIt');
    container.classList.remove('hideIt');
  }
});

let myLibrary = [
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  },
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  },
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  },
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  },
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  },
  {
    title: 'Pastoriti',
    author: 'Paul David Tripp',
    nbPages: 	268,
    read: 'no'
  }
];

function Book(title, author, nbPages, read) {
  this.title = title;
  this.author = author;
  this.nbPages = nbPages;
  this.read = read;
}

function addBookToLibrary() {
  let bTitle = document.getElementById('bookTitle');
  let bAuthor = document.getElementById('bookAuthor');
  let bNbPages = document.getElementById('nbPages');
  let bStatus = document.getElementById('readStatus');

  let newBook = new Book(bTitle.value, bAuthor.value, bNbPages.value, bStatus.value);
  myLibrary.push(newBook);
  form.classList.add('hideIt');
  container.classList.remove('hideIt');
  renderBooks(myLibrary);
}


function renderBooks(data) {
  let booksToRender = [];
  if (data && data.length > 0) {
    data.forEach(book => {
      const html = `
        <div class="container-card">
          <h3>Title: ${book.title}</h3>
          <h4>Author: ${book.author}</h4>
          <h4>Number of pages: ${book.nbPages}</h4>
          <h4>Read: ${book.read}</h4>
        </div>
      `;
      booksToRender += html;
    });
  }
  containerBook.innerHTML = booksToRender;
}

renderBooks(myLibrary);
