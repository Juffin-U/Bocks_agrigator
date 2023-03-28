<template>
  <nav>
    <span class="button"><router-link c to="/">Избранное</router-link></span>
    |
    <span class="button"><router-link to="/search">Поиск</router-link></span>
  </nav>
  <router-view />
</template>

<script setup>
import { useBooksStore } from "@/store/BooksStore";

const booksStore = useBooksStore();
</script>

<style lang="scss">
#app {
  font-family: Noto Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.button {
  border: none;
  color: #2c3e50;
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.button:hover {
  background: #4582ae;
  color: #42b983;
}
</style>
