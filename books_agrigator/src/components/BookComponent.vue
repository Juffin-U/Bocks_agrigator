<template>
  <div class="book">
    <img
      class="bookImage"
      :src="require(`@/assets/img/${props.book.pathToPoster}`)"
      :alt="props.book.name"
    />
    <div class="bookInfo">
      <div class="bookName">{{ props.book.name }}</div>
      <div class="bookName">{{ props.book.author }}</div>
      <div class="overview">{{ props.book.overview }}</div>
      <div class="bookName">{{ props.book.id }}</div>
      <div class="addAndDeleteButtons" v-if="props.book.isRead !== undefined">
        <button
          class="bookReadButtons button"
          @click="userLibrary.changeIsReadField(props.book.id)"
        >
          <span class="button" v-if="!props.book.isRead">
            Добавить в читаемое
          </span>
          <span class="button" v-else>Убрать из читаемого</span>
        </button>
        <button class="button" @click="userLibrary.deleteBook(props.book.id)">
          Убрать из библиотеки
        </button>
      </div>
      <div v-else>
        <button
          class="bookReadButtons button"
          v-if="props.book.isAdded === false"
          @click="booksStore.addToUSerBooks(props.book.id)"
        >
          Добавить в библиотеку
        </button>
        <button
          class="bookReadButtons button"
          v-else
          @click="userLibrary.deleteBook(props.book.id)"
        >
          Убрать из библиотеки
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useBooksStore } from "@/store/BooksStore";
import { useUserBooksStore } from "@/store/UserLibraryStore";

const booksStore = useBooksStore();
const userLibrary = useUserBooksStore();

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.addAndDeleteButtons {
  display: flex;
  flex-direction: row;
}
.bookInfo {
  display: flex;
  padding: 20px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.book {
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
.bookImage {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 10%;
}
.bookName {
  display: flex;
  align-items: start;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
}
.overview {
  display: block;
  margin-bottom: 20px;
}
.bookReadButtons {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
