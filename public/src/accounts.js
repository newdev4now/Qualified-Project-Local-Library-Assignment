function findAccountById(accounts, id) {
  // Use the find() method for comparison to get the element from the accounts array.
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // Use the sort() method to sort the accounts array by last name.
    accounts.sort((accountA, accountB) => accountB.name.last.toLowerCase() < accountA.name.last.toLowerCase()? 1 : -1);
    // Return accounts object
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  // Use the reduce() method to calculate a single result
  return books.reduce((total, book) => {
    // Filter elements through the function
    const idCount = book.borrows.filter(borrow =>
    borrow.id === account.id).length
    // Return the number of times an account borrows a book
    return total + idCount
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  // Filter through the array of book objects to find books
  //that are currently checked out by the given account
  const { id } = account
  let filteredBooks = books.filter(book => {
    return book.borrows.some(borrow =>
    borrow.id === id && !borrow.returned)
  })// Return an array of book objects, including author info.
  return filteredBooks.map(book => {
    book.author = authors.find(author =>
    author.id === book.authorId)
    return book
  })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
