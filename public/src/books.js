function findAuthorById(authors, id) {
  // Use the find() method to find the author.
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // Use the find() method to find book.
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // Return an array with two arrays inside of it.
  let allBooks = []
  // The first array contains book objects that represent those that are currently checked out/
  let borrowedBooks = []
  // The second array contains objects that have been returned.
  let returnedBooks = []
  // Filter through the books to check for the returned status.
  books.filter((book) => {
    if (!book.borrows[0].returned ? borrowedBooks.push(book) : returnedBooks.push(book))
    allBooks = [borrowedBooks, returnedBooks]
  })
  // Return the array containing two arrays.
  return allBooks

}




function getBorrowersForBook(book, accounts) {
  // Return an object that represents the accounts given by the book's `borrows` array.
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
  // The account object should include the `returned` entry from the corresponding `borrows` array.
    account.returned = borrow.returned
  // It should return an array of ten or fewer account objects.
    return account
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
