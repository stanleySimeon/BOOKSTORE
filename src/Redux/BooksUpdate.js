const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYEYOutEz1nUC9UeV84P';

export const saveBook = async ({
  id, title, type, author,
}) => {
  const response = await fetch(`${api}/books`, {
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

export const removeBook = async (id) => {
  const response = await fetch(`${api}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return response;
};
