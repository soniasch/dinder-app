<script setup lang="ts">
</script>

<template>
    <div class="main-div">
      <h1>Welcome to Dinder</h1>
      <p>Bark up the right tree with us!</p>
      <RouterLink to="/about">
        <button role="link" class="button">
          Start
        </button>
      </RouterLink>
    </div>
</template>

<style scoped lang="scss">
  h1 {
    color: color('secondary');
    font-weight: bold;
  }
  p {
  color: color('secondary');
  font-size: 1.5rem;
}
.main-div {
  margin-top: 3rem;
  text-align: center;
}
.button {
  background-color: color('start-button');
  padding-block: 0.5rem;
  color: color('background');
  padding-inline: 5rem;
  font-size: xx-large;
  border-radius: 10px;
  margin-top: 1rem;
  border-width: 0;
}
</style>
