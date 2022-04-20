const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OBc360vRnwCEX6Iq6bak/books';

export const saveBook = async ({
  id, title, type, author,
}) => {
  const response = await fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id, title, author, category: type,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return response;
};

// Redux reducer => fetch function => useEffect(( => {}, [])) => const getdata = useSelector

export const removeBook = async (id) => {
  const response = await fetch(`${API}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return response;
};

export const BooksLoad = async () => {
  const response = await fetch(`${API}/books`).then((res) => res.json())
    .then((result) => result);
  const Arr = Object.entries(response)
    .map(([id, book]) => ({ ...book[0], id: Number(id), type: book[0].category }));
  return Arr;
};
