import { defineStore } from "pinia";
import { useBooksStore } from "@/store/BooksStore";
import { UserBook } from "@/models/interfaces";

interface State {
  books: UserBook[];
}

export const useUserBooksStore = defineStore("userLibrary", {
  state: (): State => ({
    books: [],
  }),

  getters: {
    readBooks(state) {
      return state.books.filter((el: UserBook) => el.isRead);
    },
  },
  actions: {
    changeIsReadField(id: number) {
      const idx = this.books.findIndex((el) => el.id === id);
      this.books[idx].isRead = !this.books[idx].isRead;
    },
    deleteBook(id: number) {
      const useStore = useBooksStore();
      const idx = useStore.books.findIndex((el) => el.id === id);
      this.books = this.books.filter((el) => el.id !== id);
      useStore.changeIsAddedConditions(idx);
    },
  },
});
