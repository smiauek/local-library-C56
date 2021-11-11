function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0
  for (let i=0; i<books.length; i++){
    if (books[i].borrows[0].returned == false){
      borrowedBooks++
    }
  }
  return borrowedBooks
}

function getMostCommonGenres(books) {
  const commonGenres = {}
  books.forEach(({ genre }) => {
    commonGenres[genre] = commonGenres[genre]? commonGenres[genre] + 1 : 1
  })
  const mostCommonGenres = Object.keys(commonGenres).map((genre) => ({ name: genre, count: commonGenres[genre] }))
  const mostCommonGenresSorted = mostCommonGenres.sort((genreA, genreB) => genreA.count < genreB.count? 1 : -1)
  return mostCommonGenresSorted.slice(0, 5)
}

function getMostPopularBooks(books) {
  const popularBooks = books.map(book=> ({name: book.title, count: book.borrows.length}))
  const popularBooksSorted = popularBooks.sort((bookA, bookB)=> bookA.count < bookB.count? 1 : -1)
  return popularBooksSorted.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = []
 authors.forEach((item) => {
  let author = { name: `${item.name.first} ${item.name.last}`, count: 0}
 books.forEach((book) => {
   if (book.authorId === item.id) {
    author.count += book.borrows.length
   }
  })
  popularAuthors.push(author)
 })
 const popularAuthorsSorted = popularAuthors.sort((countA, countB) => countA.count <  countB.count? 1 : -1)
 return popularAuthorsSorted.slice(0, 5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
