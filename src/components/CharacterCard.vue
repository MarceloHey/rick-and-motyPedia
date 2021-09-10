<template>
  <div class="character-card">
    <div class="character-card--image">
      <img :src="image" alt="Imagem do personagem" />
    </div>
    <div class="character-card--info">
      <p class="character-card--name">
        <slot name="name"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/keyframes";
@import "../../public/scss/variables";

.character-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 200px;
  height: 300px;
  padding: 20px 10px;
  margin: 20px;
  background: $primary;
  box-shadow: rgba(0, 0, 0, 1) 0px 1px 4px;
  transition: 0.2s;
  animation: anime-left 1s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    background: $ternary;
    color: $secondary;
  }
  .character-card--info {
    text-align: center;
    padding: 10px 0;
    .character-card--name {
      line-height: 1;
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  .character-card--image img {
    max-width: 100%;
  }
}
</style>