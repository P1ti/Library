let myLibrary = [
  {
    title: "Ciocoii vechi si noi",
    author: "Nicolae Filimon",
    nbPages: 238,
    readStatus: false
  }
];

function Book(title, author, nbPages, readStatus) {
  this.title = title;
  this.author = author;
  this.nbPages = nbPages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  let title = document.querySelector('#bookTitle').value;
  let author = document.querySelector('#bookAuthor').value;
  let nbPages = document.querySelector('#nbPages').value;

  if (title.length === 0) {
    document.querySelector('#bookTitle').placeholder = "Te rog sa completezi acest camp";
  } else if (author.length === 0) {
    document.querySelector('#bookAuthor').placeholder = "Te rog sa completezi acest camp";
  } else if (nbPages.length === 0) {
    document.querySelector('#nbPages').placeholder = "Te rog sa completezi acest camp";
  } else {
    let newBook = new Book(title, author, nbPages, false);
    myLibrary.push(newBook);
    renderBooks(myLibrary);
    closeForm();
  }
}

function renderBooks(data) {
  let htmlToAdd = "";
  if (data && data.length > 0) {
    data.forEach((item, i) => {
      htmlToAdd += `
        <div class="container-card">
          <p>${item.title}<p>
          <p>${item.author}<p>
          <p>${item.nbPages} pages<p>
          <button id="deleteBook" onclick="deleteBook(${i})" >Delete</button>
          <button id="readStatus" onclick="changeStatus(${i})" >${readSt(item.readStatus)}</button>
        </div>
      `;
    });

  }
  document.querySelector('#container-book').innerHTML = htmlToAdd;
}

renderBooks(myLibrary);

function readSt(status) {
  if (status === false) {
    return "Not read yet";
  } else {
    return "Read";
  }
  return status;
}

function changeStatus(i) {
  if (myLibrary[i].readStatus === true) {
    myLibrary[i].readStatus = false;
  } else {
    myLibrary[i].readStatus = true;
  }
  document.querySelector('#readStatus').innerHTML = readSt(myLibrary[i].readStatus);
}

function deleteBook(i) {
    myLibrary.splice(i, 1);
    renderBooks(myLibrary);
}

function openForm() {
  if (document.querySelector('.container-form').classList.contains('hideIt')) {
    document.querySelector('.container-form').classList.remove('hideIt');
  }
}

function closeForm() {
  document.querySelector('.container-form').classList.add('hideIt');
}
