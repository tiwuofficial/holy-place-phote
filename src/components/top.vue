<template>
  <section class="hero-header"  v-bind:style="{ backgroundImage: 'url(' + topImage +')' }">
    <section class="hero-header__layer">
      <svg>
          <text x="50%" y="50%" class="holy">Holy Place Photo!</text>
      </svg>
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

  svg {
    width: 500px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
  }

  text {
    text-anchor: middle;
    font-size: 50px;
    fill: none;
    stroke: none;
    stroke-dasharray: 150% 150%;
    stroke-width: 1px;
    -webkit-animation: stroke-offset 5s linear 2s forwards;
          animation: stroke-offset 5s linear 2s forwards;
  }

  @-webkit-keyframes stroke-offset {
    0% {
      stroke-dashoffset: 150%;
      stroke: white;
      fill:transparent;
    }
    50% {
      fill:transparent;
      stroke: white;
    }
    100% {
      stroke-dashoffset: 0%;
      stroke: white;
      fill: white;
    }
  }

  @keyframes stroke-offset {
    0% {
      stroke-dashoffset: 150%;
      stroke: white;
      fill:transparent;
    }
    50% {
      fill:transparent;
      stroke: white;
    }
    100% {
      stroke-dashoffset: 0%;
      stroke: white;
      fill: white;
    }
  }

  @media (max-width: 1000px) {
    svg {
      width: 290px;
    }
    text {
      font-size: 37px;
    }
    .button {
      top: 80%;
    }

  }
</style>
