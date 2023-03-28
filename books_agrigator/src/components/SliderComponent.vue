<template>
  <div
    class="searchedBooks"
    v-if="props.searchedBooks.length - 1 < indexOfBookToNext"
  >
    <BookComponent
      v-for="book in props.searchedBooks"
      :key="book.id"
      :book="book"
      class="searchedBook"
    ></BookComponent>
  </div>
  <div v-else-if="userWindowLen < 800">
    <BookComponent
      v-for="book in props.searchedBooks"
      :key="book.id"
      :book="book"
      class="searchedBook"
    ></BookComponent>
  </div>
  <div class="searchedCont" v-else>
    <div @click="prev" class="arrow-left">
      <div class="arrow-left-top"></div>
      <div class="arrow-left-bottom"></div>
    </div>
    <div class="searchedBooks">
      <BookComponent
        v-for="book in booksInWindow"
        :key="book.id"
        :book="book"
        class="searchedBook"
      ></BookComponent>
    </div>
    <div @click="next" class="arrow-right">
      <div class="arrow-right-top"></div>
      <div class="arrow-right-bottom"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import BookComponent from "@/components/BookComponent.vue";
import { ref } from "vue";

const props = defineProps({
  searchedBooks: {
    type: Array,
    default: () => [],
  },
});

let indexOfBookToNext = ref(0);
let indexOfBookToPrev = ref(0);
let booksInWindow = ref([]);
let userWindowLen = ref(window.innerWidth);
const widthOfSearchedBook = 500;
indexOfBookToNext.value =
  parseInt(userWindowLen.value / widthOfSearchedBook) - 1;
for (let i = 0; i <= indexOfBookToNext.value; i++)
  booksInWindow.value.push(props.searchedBooks[i]);
indexOfBookToPrev.value = 0;

function reduceIndex(index) {
  if (index !== 0) index -= 1;
  else index = props.searchedBooks.length - 1;
  return index;
}

function increaseIndex(index) {
  if (index !== props.searchedBooks.length - 1) index += 1;
  else index = 0;
  return index;
}

function prev() {
  indexOfBookToNext.value = reduceIndex(indexOfBookToNext.value);
  indexOfBookToPrev.value = reduceIndex(indexOfBookToPrev.value);
  booksInWindow.value.pop();
  booksInWindow.value.unshift(props.searchedBooks[indexOfBookToPrev.value]);
}
function next() {
  indexOfBookToNext.value = increaseIndex(indexOfBookToNext.value);
  indexOfBookToPrev.value = increaseIndex(indexOfBookToPrev.value);
  booksInWindow.value.shift();
  booksInWindow.value.push(props.searchedBooks[indexOfBookToNext.value]);
}
</script>

<style scoped>
.arrow-right,
.arrow-left {
  cursor: pointer;
  height: 60px;
  width: 80px;
  position: relative;
  margin-top: -50px;
}

.arrow-right-top,
.arrow-right-bottom,
.arrow-left-top,
.arrow-left-bottom {
  background: #337ab7;
  height: 7px;
  left: -20px;
  position: absolute;
  top: 62px;
  width: 50px;
}
.arrow-right-top {
  top: 64px;
  transform: rotate(45deg);
  transform-origin: bottom right;
}
.arrow-left-top {
  top: 64px;
  transform: rotate(135deg);
  transform-origin: bottom right;
}
.arrow-left-bottom {
  top: 72px;
  transform: rotate(-135deg);
  transform-origin: top right;
}
.arrow-right-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;
}
.arrow-left-top::after,
.arrow-left-bottom::after,
.arrow-right-top::after,
.arrow-right-bottom::after {
  background: #000;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}
.arrow-left-top::after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}
.arrow-left-bottom::after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}
.arrow-right-top::after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}
.arrow-right-bottom::after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}
.arrow-left:hover .arrow-left-top::after {
  left: 0;
  transition-delay: 0.15s;
}
.arrow-left:hover .arrow-left-bottom::after {
  right: 0;
  transition-delay: 0s;
}
.arrow-right:hover .arrow-right-top::after {
  left: 0;
  transition-delay: 0.15s;
}
.arrow-right:hover .arrow-right-bottom::after {
  right: 0;
  transition-delay: 0s;
}

.searchedCont {
  display: flex;
  flex-direction: row;
}
@keyframes show {
  from {
    width: 0;
  }
  to {
    width: 500px;
  }
}
.searchedBooks {
  display: flex;
  flex-direction: row;
}
.searchedBook {
  width: 500px;
  overflow: hidden;
}
@media (max-width: 800px) {
  .searchedBook {
    width: 80%;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .searchedBooks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
