<template>
  <form class="searchForm" @submit.prevent="getBooks">
    <input
      type="text"
      class="searchInput"
      placeholder="Введите название книги"
      v-model="searchBook"
    />
  </form>
  <div v-if="tmpBooksStore.length !== 0">
    <BookComponent
      v-for="book in tmpBooksStore"
      :key="book.id"
      :book="book"
    ></BookComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBooksStore } from "@/store/BooksStore";
import BookComponent from "@/components/BookComponent.vue";

let searchBook = ref("");

const booksStore = useBooksStore();
let tmpBooksStore = ref([]);

function getBooks() {
  tmpBooksStore.value = booksStore.searchBooks(searchBook.value);
  console.log(tmpBooksStore.value);
}
</script>

<style scoped>
.searchForm {
  width: 70%;
}

.searchInput {
  border: 1px solid #efefef;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
