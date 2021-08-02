import { Map } from 'immutable';

let book = Map({ title: 'Harry Potter' });

function publish(book) {
  return book.set('isPublished', true);
}
const book1 = publish(book);
console.log(book1.toJS());
console.log(book.toJS());
