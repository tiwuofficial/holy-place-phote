<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/gallery" class="nav-link">Gallery</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- 表示の度ランダムで写真を表示する -->
    <h1>Gallery</h1>
      <div v-for="(list, anim) in this.$store.state.gallery.list">
        <div v-for="img in list">
          <img v-bind:src="imgUrl('./' + anim + '/' + img)">
        </div>
      </div>
  </section>
</template>

<script>
const images = require.context('../assets/img/', true, /\.jpg$/);

export default {
  data() {
    return {
    };
  },
  methods: {
    imgUrl(path) {
      return images(path);
    },
  },
};
</script>

<style scoped>
  header {
    background: #000;
    height: 45px;
    position: relative;
  }

  nav {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  ul {
    list-style: none;
    -webkit-flex-direction: row;
    flex-direction: row;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    padding: 0;
    width: 300px;
    margin: auto;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
  }

  img {
    width: 200px;
    height: 200px;
  }
</style>
