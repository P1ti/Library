let addNew = document.querySelector('.addNew');
let container = document.querySelector('.container');
let cancelBtn = document.querySelector('#cancelBtn');
let containerBook = document.getElementById('container-book');
const form = document.querySelector('.container-form');

function changeStatus(e) {
  if (e.innerHTML === "Not Read") {
    e.innerHTML = "Read";
    e.style.backgroundColor = "#D95D39";
    e.style.color = "white";
  } else if (e.innerHTML === "Read") {
    e.innerHTML = "Not Read";
    e.style.backgroundColor = "#7B9E89";
    e.style.color = "white";
  } else {
    e.innerHTML = "Not Read";
    e.style.backgroundColor = "#7B9E89";
    e.style.color = "white";
  }
}

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
    nbPages: 	268
  }
];

function Book(title, author, nbPages) {
  this.title = title;
  this.author = author;
  this.nbPages = nbPages;
}

function addBookToLibrary() {
  let bTitle = document.getElementById('bookTitle');
  let bAuthor = document.getElementById('bookAuthor');
  let bNbPages = document.getElementById('nbPages');

  let newBook = new Book(bTitle.value, bAuthor.value, bNbPages.value);
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
          <h3>${book.title}</h3>
          <h4>${book.author}</h4>
          <h4>${book.nbPages} of pages</h4>
          <button onclick="changeStatus(this)" id="readStatus">Not Read</button>
        </div>
      `;
      booksToRender += html;
    });
  }
  containerBook.innerHTML = booksToRender;
}

renderBooks(myLibrary);
