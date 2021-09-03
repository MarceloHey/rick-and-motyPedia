<template>
  <div class="episode-card">
    <p class="episode-card--episode">
      <slot name="episode"></slot>
    </p>
    <p class="episode-card--name">
      <slot name="name"></slot>
    </p>
    <p class="episode-card--air_date">
      <slot name="air_date"></slot>
    </p>
  </div>
</template>
<style lang="scss">
@import "../../public/scss/keyframes";

.episode-card {
  border-radius: 0.5rem;
  width: 250px;
  height: 100px;
  padding: 10px 10px;
  margin: 10px;
  background: #fea;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  transition: 0.2s;
  animation: anime-left 0.5s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    background: white;
  }
  p {
    font-size: 1rem;
    padding: 0.3rem 0;
  }
}
</style>