<template>
  <nav>
    <span class="button"><router-link c to="/">Избранное</router-link></span>
    |
    <span class="button"
      ><router-link class="button" to="/search">Поиск</router-link></span
    >
  </nav>
  <router-view />
</template>

<script setup>
import { useBooksStore } from "@/store/BooksStore";

const booksStore = useBooksStore();
</script>

<style lang="scss">
.buttonRed {
  background: #df3737;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.button {
  border: none;
  width: 150px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
</style>
