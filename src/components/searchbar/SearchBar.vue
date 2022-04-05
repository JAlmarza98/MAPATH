<script lang="ts" src="./SearchBar.ts"/>

<template>
  <div class="searchbar-container">
    <input class="form-control" type="text" placeholder="Buscar lugares..." v-model="searchTerm">
    <SearchResults/>
  </div>
</template>

<style scoped>
.form-control {
  background-color: rgb(94, 94, 94);
  border: 3px solid rgba(0, 0, 0, 0);
  color: white;
}
input:focus {
  box-shadow: none;
  outline: 0 none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.541);
  transition: 0.4s;
}
::placeholder {
  color: rgba(255, 255, 255, 0.541);
}
.searchbar-container {
  background-color: rgb(94, 94, 94);
  border-radius: 5px !important;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  left: 30px;
  overflow: hidden;
  padding: 5px;
  position: fixed;
  top: 30px;
  width: 250px;
  z-index: 999;
}
</style>
