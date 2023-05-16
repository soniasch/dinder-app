<script lang="ts">
import { callGetDogs } from '@/index';
import { onBeforeMount } from 'vue';

export default {
  callGetDogs
}

</script>

<template>
  <div class="container">
    <div class="border">
      <div class="content">
        <p v-if="dog">Name: {{ dog.breed }}</p>
        <p>Breed: </p>
        <p>Age: </p>
        <p>Hobbies: </p>
        <p>Good with children: </p>
        <p>Barking: </p>
        <p>Energy: </p>
      </div>
    </div>
    <div class="button-block">
      <button class="growl-button">Growl...</button>
      <button class="voff-button">Voff!</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: #263A29;
  font-size: larger;
  font-weight: bold;
}
.container {
  margin: auto;
  width: 90%;
  display: flex;
  flex-flow: column;
  width: 90%;
}

.content {
  margin-left: 1rem;
}
.growl-button {
  background-color: color('background');
  padding-block: 0.5rem;
  padding-inline: 5rem;
  font-size: xx-large;
  border-radius: 10px;
  margin-top: 1rem;
  color: #E84637;
  border-color: #E84637; 
  border-style: solid;
}
.voff-button {
  background-color: color('secondary');
  padding-block: 0.5rem;
  color: color('background');
  padding-inline: 5rem;
  font-size: xx-large;
  border-radius: 10px;
  margin-top: 1rem;
  border-style: solid;
}
.border {
  border-color: color('secondary');
  border-style: solid;
}
.button-block {
  display: flex;
  justify-content: space-between;
}
  
</style>
