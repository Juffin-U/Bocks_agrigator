<template>
  <div class="search">
    <SearchComponent />
    <div class="allBooksCont">
      <h3>Все книги: {{ booksStore.books.length }}</h3>
      <div class="booksContainer">
        <BookComponent
          v-for="book in booksStore.books"
          :key="book.id"
          :book="book"
          class="booksComponentContainer"
        ></BookComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from "@/store/BooksStore";
import SearchComponent from "@/components/SearchComponent";
import BookComponent from "@/components/BookComponent";
import { useUserBooksStore } from "@/store/UserLibraryStore";

const booksStore = useBooksStore();
const userLibrary = useUserBooksStore();
console.log(userLibrary.books.length);
if (userLibrary.books.length === 0) {
  booksStore.getBooksFromServer();
}
</script>

<style scoped>
@media (min-width: 800px) {
  .booksContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    width: 100%;
  }

  .allBooksCont {
    display: flex;
    width: 40%;
    align-items: start;
    flex-direction: column;
  }
}
@media (max-width: 800px) {
  .booksContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    width: 100%;
  }
  .allBooksCont {
    display: flex;
    width: 80%;
    align-items: start;
    flex-direction: column;
  }
}
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
