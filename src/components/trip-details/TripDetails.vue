<script lang="ts" src="./TripDetails.ts"/>

<template>
  <div class="trip-container column" v-if="distance && duration">
    <div class="col"><i class="fa-solid fa-road"></i> Distancia: <strong>{{distance}} Km</strong></div>
    <div class="col"><i class="fa-solid fa-stopwatch"></i>&nbsp; Duración: <strong>{{duration}} min</strong></div>
  </div>
</template>

<style scoped>
.trip-container {
  background-color: rgb(94, 94, 94);
  border-radius: 10px;
  bottom: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0,2);
  color: rgba(255, 255, 255, 0.75);
  font-size: 25px;
  left: 20px;
  padding: 15px;
  position: fixed;
  width: fit-content;
}
</style>
