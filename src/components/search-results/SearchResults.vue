<script lang="ts" src="./SearchResults.ts"/>

<template>
  <div class="alert alert-light text-center" v-if="isLoadingPlaces">
    <h5>Cargando</h5>
    <span>Espere por favor...</span>
  </div>
  <ul class="list-group mt-3" v-else-if="places.length > 0">
    <li class="list-group-item list-group-item-action"
      v-for="place in places" :key="place.id"
      :class="{'active': place.id === activePlace}"
      @click="onPlaceClick(place)">
      <h5>{{place.text}}</h5>
      <p>{{place.place_name}}</p>
        <div align="right">
          <button class="btn btn-outline-light btn-sm" :class="(place.id === activePlace)?'btn-primary':'btn-outline-light'">
              Direcciones <i class="fa-solid fa-route"></i>
          </button>
        </div>
    </li>
  </ul>
</template>

<style scoped>
.list-group-item {
  background-color: rgb(114, 114, 114);
  color: rgba(255, 255, 255, 0.8);
}
li {
  cursor: pointer;
}
h5 {
  font-size: 16px !important;
}
p {
  font-size: 11px !important;
}
.active {
  background-color: rgb(173, 173, 173);
  color: rgba(0, 0, 0, 0.75);
  border: none;
}
</style>
