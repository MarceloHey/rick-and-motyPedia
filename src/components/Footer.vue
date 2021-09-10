<template>
  <footer class="footer">
    <div class="footer-logo">
      <router-link to="/">
        <img src="../assets/Rick_and_Morty.svg" alt="Site logo" />
      </router-link>
    </div>
    <div>MarceloHey 2021 - wubba lubba dub dub</div>
    <div class="footer-social-media">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/marcelo-toniolo-hey-51b6b0133/"
      >
        <img src="../assets/linkedin-logo.svg" alt="" />
      </a>
      <a target="_blank" href="https://github.com/MarceloHey">
        <img src="../assets/github-logo.svg" alt="" />
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/general";

.footer {
  background: $ternary;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  img {
    max-width: 180px;
  }
  .footer-social-media {
    display: flex;
    flex-wrap: wrap;
    img {
      max-width: 60px;
      margin: 0 10px;
    }
  }

  @include device(small) {
    flex-direction: column;
    div {
      margin: 20px;
    }
  }
}
</style>