import { defineStore } from "pinia";
import { useUserBooksStore } from "@/store/UserLibraryStore";
import axios from "axios";
import { UserBook, Book } from "@/models/interfaces";

interface State {
  books: Book[];
}

export const useBooksStore = defineStore("booksStore", {
  state: (): State => ({
    books: [],
  }),
  getters: {
    searchBooks(state) {
      return (name: string) =>
        state.books.filter((el: Book) =>
          el.name.toLowerCase().includes(name.trim().toLowerCase())
        );
    },
  },
  actions: {
    addToUSerBooks(id: number) {
      const userStore = useUserBooksStore();
      const idx = this.books.findIndex((el) => el.id === id);
      const book = this.books[idx];
      this.changeIsAddedConditions(idx);
      const bookToPush: UserBook = {
        author: book.author,
        id: book.id,
        name: book.name,
        overview: book.overview,
        pathToPoster: book.pathToPoster,
        isRead: false,
      };

      userStore.books.push(bookToPush);
    },
    async getBooksFromServer() {
      axios
        .get("Juffin-U/json/books")
        .then((Response) => {
          this.books = Response.data;
          for (const book of this.books) {
            book.isAdded = false;
          }
          console.log(this.books);
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
    changeIsAddedConditions(idx: number) {
      this.books[idx].isAdded = !this.books[idx].isAdded;
    },
  },
});
