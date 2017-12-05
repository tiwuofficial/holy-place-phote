<template>
  <section class="hero-header"  v-bind:style="{ backgroundImage: 'url(' + topImage +')' }">
    <section class="hero-header__layer">
      <h1>Otak Holy Place Photo</h1>
      <router-link to="/gallery" class="button">Gallery</router-link>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topImage: this.$store.state.topImage('./top.jpg'),
    };
  },
};
</script>

<style scoped>
  .hero-header {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .hero-header__layer {
    height: 100vh;
    background-color: rgba(74,74,74,.7);
  }

  h1 {
    font-weight: normal;
    font-size: 60px;
    color: #fff;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
  }

  .button {
    position: absolute;
    top: 70%;
    left: 50%;
    display: block;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 24px;
    padding: 12px 45px;
    color: #fff;
  }

  .button:hover {
    background: rgba(255,255,255,.1);
  }
</style>
