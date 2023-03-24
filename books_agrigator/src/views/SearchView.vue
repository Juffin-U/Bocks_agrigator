<template>
  <div class="search">
    <SearchComponent />
    <h3>Все книги</h3>
    <div class="booksContainer">
      <BookComponent
        v-for="book in booksStore.books"
        :key="book.id"
        :book="book"
        class="booksComponentContainer"
      ></BookComponent>
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
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
