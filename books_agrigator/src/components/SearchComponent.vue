<template>
  <form class="searchForm" @submit.prevent="getBooks">
    <input
      type="text"
      class="searchInput"
      placeholder="Введите название книги"
      v-model="searchBook"
    />
  </form>
  <h3 v-show="tmpBooksStore.length !== 0">
    Найденно книг: {{ tmpBooksStore.length }}
  </h3>
  <slider-component
    v-if="tmpBooksStore.length !== 0"
    :searched-books="tmpBooksStore"
    :key="searchKey"
    class="sliderCont"
  >
  </slider-component>
</template>

<script setup>
import { ref } from "vue";
import { useBooksStore } from "@/store/BooksStore";
import SliderComponent from "@/components/SliderComponent.vue";

let searchBook = ref("");
let searchKey = ref("");

const booksStore = useBooksStore();
const tmpBooksStore = ref([]);

function getBooks() {
  tmpBooksStore.value = [];
  tmpBooksStore.value = booksStore.searchBooks(searchBook.value);
  console.log(tmpBooksStore.value.length);
  searchKey.value = tmpBooksStore.value.length + tmpBooksStore.value;
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
.sliderCont {
  align-items: center;
}
</style>
