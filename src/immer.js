import { produce } from 'immer';

let book = { title: 'Harry Potter' };

function publish(book) {
  produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

publish(book);
