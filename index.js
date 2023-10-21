const myLibrary = [];

function Book(title, author, pages, read) {
    self.title = title;
    self.author = author;
    self.pages = pages;
    self.read = read;
  // the constructor...
}

function render() {
    let libraryBook = document.querySelector(".library");
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
    }
}

function addBookToLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBooks = new Book(title, author, pages, read);
    console.log(newBooks);
    myLibrary.push(newBook);
    render();
  // do stuff here
} 


let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function() {
    let newBookForm = document.querySelector(".new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
});

document.querySelector(".new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})