function findAuthorById(authors, id) {
  let foundAuthor = authors.find((auth) => auth.id === id )
  return foundAuthor
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id )
  return foundBook
}

/*
function partitionBooksByBorrowedStatus(books) {
  let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false)
  let booksReturned = books.filter((book) => book.borrows[0].returned === true)
  return [booksCheckedOut, booksReturned]
}
*/

function partitionBooksByBorrowedStatus(books) {
  return [getBooksCheckedOut(books), getBooksReturned(books)]
}

function getBooksCheckedOut(books) {
  return books.filter((book) => book.borrows[0].returned === false)
}

function getBooksReturned(books) {
  return books.filter((book) => book.borrows[0].returned === true)
}


function getBorrowersForBook(book, accounts) {
  let borrowers = []
  let borrowArr = book.borrows 
  borrowArr.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    let obj = { ...account, returned: borrow.returned}
    borrowers.push(obj)
  })
  return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
