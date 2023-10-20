const myLibrary = [];

function Book(title, author, pages, read) {
    self.title = title;
    self.author = author;
    self.pages = pages;
    self.read = read;
  // the constructor...
}

function addBookToLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

  // do stuff here
} 


let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function() {
    let newBookForm = document.querySelector(".new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
});