function findAccountById(accounts, id) {
  let foundAcc = accounts.find((acc) => acc.id === id )
  return foundAcc
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last? 1 :-1)
}

function getTotalNumberOfBorrows(account, books) {
 return books.reduce((total, book) => total + book.borrows.filter((entry) => entry.id === account.id).length, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksPossesed = books.filter((book) => book.borrows.some((entry) => entry.id === account.id && !entry.returned))
  booksPossesed.forEach((book) => (book.author = authors.find((author) => author.id === book.authorId)))
  return booksPossesed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
