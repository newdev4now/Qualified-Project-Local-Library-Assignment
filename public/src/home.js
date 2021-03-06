function getTotalBooksCount(books) {
  // Function returns a number for the number of book objects in the array.
  return books.length;
}

function getTotalAccountsCount(accounts) {
  // The function returns a number that represents the number of account objects in the array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // Filter through the array of book objects
  let booksBorrowed = 0;
  books.filter((book) => {
  // If the book is returned = false, the book is
  // currently checked out
    if (book.borrows[0].returned === false)
      booksBorrowed += 1;
  // Return a number for the total of books currently
  // checked out
  })
  return booksBorrowed
}

function getMostCommonGenres(books) {
  // The function returns an array of five objects or fewer.
  let genres = {}
  books.forEach(book => {
   // let genreExists = genres.find(genre => genre.name === book.genre)
  // Each object contains two keys, name of the genre and a count for the number of times the genre occurs.
    if (genres[book.genre])  {
      genres[book.genre]++
    } else {
      genres[book.genre] = 1
    }
  })
  let genreList = []
  for (const [key, value] of Object.entries(genres)) {
    genreList.push({ name: key, count: value })
  }

  // The objects are ordered from most common to least.
  // Sort the genres by count.
  genreList.sort((a, b) => b.count - a.count)
  // Return the first five using slice.
  let result = genreList.slice(0, 5)
  return result
}

function getMostPopularBooks(books) {
  // The function returns an array that contains five objects or fewer that represent the most popular books in the library.
  // Each object returned conatins two keys, the title of the book and a count of how many times the book has been borrowed.
  let counter = 5
  const borrows = books.map(book => ({ name: book.title,   count: book.borrows.length }));
  borrows.sort ((a, b) => b.count - a.count);
  return borrows.slice(0, counter);
}

function getMostPopularAuthors(books, authors) {
  // Function returns an array containing 5 objects that represent the most popular authors whose books have been checked out the most.
  const authorArray = [];
  // Loop through the arrays to find which author's books have been borrowed the most.
  for (let i = 0; i < authors.length; i++) {
  // The object should have two keys, name for the author, and one for the number of times the author's books have been borrowed.
    const popAuthors = { name: authors[i].name.first + " " + authors[i].name.last, count: 0 };
    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        popAuthors.count += books[j].borrows.length
      }
    }
    authorArray.push(popAuthors);
  }
  authorArray.sort((a, b) => b.count - a.count)
  // The array should have no more than five objects.
  return authorArray.slice(0, 5);
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
