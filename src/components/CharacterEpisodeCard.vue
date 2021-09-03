<template>
  <div class="character-card">
    <div class="character-card--image">
      <img :src="image" alt="Imagem do personagem" />
    </div>
    <div class="character-card--info">
      <p class="character-card--name">
        <slot name="name"></slot>
      </p>
      <p class="character-card--status">
        <slot name="status"></slot>
      </p>
      <p class="character-card--species">
        <slot name="species"></slot>
      </p>
      <p class="character-card--gender">
        <slot name="gender"></slot>
      </p>
      <p class="character-card--origin">
        <slot name="origin"></slot>
      </p>
      <p class="character-card--location">
        <slot name="location"></slot>
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

.character-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 0.5rem;
  width: 100%;
  padding: 20px 10px;
  background: #fea;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  transition: 0.2s;
  animation: anime-left 0.5s;

  .character-card--info {
    text-align: left;
    margin-left: 20px;
    .character-card--name {
      line-height: 1;
      font-size: 1.5rem;
      margin: 10px auto;
      &::after {
        content: "";
        display: block;
        margin: 5px 0;
        height: 2px;
        width: 100px;
        background: #333;
      }
    }
    p {
      font-size: 1.2rem;
      padding: 0.3rem 0;
    }
  }

  .character-card--image img {
    max-width: 100%;
    border: 1px solid #333;
    border-radius: 0.5rem;
  }
}
</style>