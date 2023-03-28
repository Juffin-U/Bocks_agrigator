<template>
  <div class="book">
    <div class="imageCont">
      <img
        class="bookImage"
        :src="require(`@/assets/img/${props.book.pathToPoster}`)"
        :alt="props.book.name"
      />
    </div>
    <div class="bookInfo">
      <div class="bookName">{{ props.book.name }}</div>
      <div class="bookName">{{ props.book.author }}</div>
      <div class="overview">{{ props.book.overview }}</div>
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
@media (min-width: 800px) {
  .imageCont {
    height: 100%;
  }

  .addAndDeleteButtons {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .bookInfo {
    display: flex;
    padding: 20px;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .book {
    width: 700px;
    min-height: 300px;
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
    height: 50%;
    text-align: start;
    width: 100%;
    overflow: hidden;
  }

  .bookReadButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}

@media (max-width: 800px) {
  .book {
    width: 90%;
    min-height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #efefef;
    border-radius: 22px 22px 10px 10px;
    margin-bottom: 25px;
  }
  .imageCont {
    height: 100%;
    width: 100%;
  }

  .addAndDeleteButtons {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
    overflow: hidden;
  }

  .bookInfo {
    display: flex;
    padding: 20px;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .bookImage {
    width: 100%;
    height: 320px;
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
    height: 50%;
    text-align: start;
    width: 100%;
    overflow: hidden;
  }

  .bookReadButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
