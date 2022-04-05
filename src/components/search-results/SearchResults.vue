<script lang="ts" src="./SearchResults.ts"/>

<template>
  <ul class="list-group mt-3">
    <li class="list-group-item list-group-item-action">
      <h5>Nombre del lugar</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam quam nobis labore voluptate iusto beatae voluptatum distinctio laudantium officia ut veritatis eos fugit, libero nemo.</p>
        <div align="right">
          <button class="btn btn-outline-light btn-sm">
              Direcciones
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
</style>
