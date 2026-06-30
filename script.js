const booksDiv = document.getElementById("books");
const searchBox = document.getElementById("searchBox");

let allBooks = [];

fetch("books.json")
.then(res => res.json())
.then(data => {

    allBooks = data;

    displayBooks(allBooks);

});

function displayBooks(list){

    booksDiv.innerHTML="";

    list.forEach(book=>{

        booksDiv.innerHTML += `

        <div class="book">

            <img src="${book.cover}" alt="${book.title}">

            <div class="bookContent">

                <div class="category">${book.category}</div>

                <h2>${book.title}</h2>

                <p>${book.author}</p>

                <p>${book.description}</p>

                <a
                class="openBtn"
                href="viewer.html?book=${encodeURIComponent(book.file)}">
                Read
                </a>

            </div>

        </div>

        `;

    });

}

searchBox.addEventListener("input",()=>{

    let text=searchBox.value.toLowerCase();

    displayBooks(

        allBooks.filter(book=>

            book.title.toLowerCase().includes(text) ||

            book.author.toLowerCase().includes(text) ||

            book.category.toLowerCase().includes(text)

        )

    );

});
