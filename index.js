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
    libraryBook.innerHTML = ``;
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "book-card");
        bookElement.innerHTML = `      
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        </div>
    `;
        libraryBook.appendChild(bookElement);
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
    console.log(myLibrary);
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