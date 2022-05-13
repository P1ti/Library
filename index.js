let myLibrary = [
  {
    title: "Bible",
    author: "God",
    nbPages: 1800,
    readStatus: true
  }
];

function Book(title, author, nbPages, readStatus) {
  this.title = title;
  this.author = author;
  this.nbPages = nbPages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {

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
