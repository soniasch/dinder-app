<script lang="ts" setup>
import { useDogStore } from '@/stores/dogs'
const useDog = useDogStore()
useDog.callGetDogs()
</script>

<template>
  <div class="container">
    <div class="border">
      <div class="content">
        <p v-if="useDog.dog.name">
          Name: <span class="text">{{ useDog.dog.name }}</span>
        </p>
        <p v-if="useDog.dog.breed">
          Breed: <span class="text">{{ useDog.dog.breed }}</span>
        </p>
        <p v-if="useDog.dog.age">
          Age: <span class="text">{{ useDog.dog.age }}</span>
        </p>
        <p v-if="useDog.dog.description">
          Description: <span class="text">{{ useDog.dog.description }}</span>
        </p>
        <p class="icons" v-if="useDog.dog.goodWithChildren">
          Good with children:
          <img v-for="kind in useDog.dog.goodWithChildren" :key="kind" src="@/assets/paw.svg" />
        </p>
        <p class="icons" v-if="useDog.dog.barking">
          Barking:
          <img v-for="bark in useDog.dog.barking" :key="bark" src="@/assets/bark.svg" />
        </p>
        <p class="icons">
          Energy:
          <img v-for="energy in useDog.dog.energy" :key="energy" src="@/assets/energy.svg" />
        </p>
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
  color: #263a29;
  font-size: larger;
  font-weight: bold;
}

img {
  margin: 2px;
}

.text {
  color: #263a29;
  font-size: large;
  font-weight: 200;
}
.container {
  margin: auto;
  width: 90%;
  display: flex;
  flex-flow: column;
  width: 90%;
}

.icons {
  display: flex;
  align-items: center;
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
  color: #e84637;
  border-color: #e84637;
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
