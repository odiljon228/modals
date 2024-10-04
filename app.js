const books = [
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        year: 2018,
        genre: "O'rganish",
        rating: 4.8
    },
    {
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        year: 2015,
        genre: "Dasturlash",
        rating: 4.6
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        year: 2008,
        genre: "Dasturlash",
        rating: 4.5
    },
    {
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        year: 2020,
        genre: "Dasturlash",
        rating: 4.7
    },
    {
        title: "JavaScript and JQuery: Interactive Front-End Web Development",
        author: "Jon Duckett",
        year: 2014,
        genre: "Web Dasturlash",
        rating: 4.4
    }
];

// Kitoblar ro'yxatini ko'rsatish
books.forEach(book => {
    let search = prompt('Kitob nomini kirit')
    if(book.title == search){
        alert(book.author, book.genre)
    }
});

