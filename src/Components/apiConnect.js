class BookstoreAPI {
  static baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2iHiTbOoSnfgGXhW4oy3/books/';

  static getBooks = async () => fetch(this.baseURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => {
    if (response.ok) {
      try {
        const data = await response.json();
        const books = [];
        Object.entries(data).forEach(
          ([id, book]) => books.push({
            item_id: id,
            title: book[0].title,
            author: book[0].author,
            category: book[0].category,
          }),
        );
        return books;
      } catch (e) {
        return [];
      }
    }
    return null;
  });

  static addBook = async ({
    id, bookName, authorName, category,
  }) => fetch(this.baseURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title: bookName,
      author: authorName,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => response.ok);

static removeBook = async ({ id }) => fetch(`${this.baseURL}${id}`, {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(async (response) => response.ok);
}

export default BookstoreAPI;
