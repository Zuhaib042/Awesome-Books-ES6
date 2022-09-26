import Book, {
  booksSection,
  inputTitle,
  inputAuthor,
} from './modules/books.js';
import { navigation } from './modules/navigation.js';
const addBtn = document.getElementById('add-btn');

window.onload = Book.displayBooks();
window.onload = navigation();
setInterval(Book.timeDisplay, 1000);
addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  Book.addBook();
  Book.displayBooks();
  inputTitle.value = '';
  inputAuthor.value = '';
});
