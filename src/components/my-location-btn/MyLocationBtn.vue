import { defineComponent } from 'vue';
<script lang="ts" src="./MyLocationBtn.ts"/>

<template>
  <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClicked">
    Ir a mi ubicación &nbsp;<i class="fa-solid fa-location-crosshairs"></i>
  </button>
</template>

<style scoped>
button {
  position: fixed;
  right: 30px;
  top:30px;
}
</style>
