<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/gallery" class="nav-link">Gallery</router-link></li>
          <li><router-link to="/k-on" class="nav-link">K-on</router-link></li>
          <li><router-link to="/chu-ni" class="nav-link">Chu-ni</router-link></li>
        </ul>
      </nav>
    </header>
    <h1>Chu-ni</h1>
    <section class="gallery-list">
      <div v-for="img in this.list" :class="{ big:  BigList.indexOf(img) >= 0 }">
        <img v-bind:src="imgUrl(img)">
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: this.$store.state.imageList.keys(),
      BigList: [],
    };
  },
  methods: {
    imgUrl(path) {
      return this.$store.state.imageList(path);
    },
    random(array, num) {
      const a = array;
      const t = [];
      const r = [];
      let l = a.length;
      let n = num < l ? num : l;
      while (n-- > 0) {
        const i = Math.random() * l | 0;
        r[n] = t[i] || a[i];
        --l;
        t[i] = t[l] || a[l];
      }
      return r;
    },
  },
  created() {
    this.list = this.list.filter(function(element) {
      return element.indexOf('chu-ni') > -1;
    });
    for (let i = this.list.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.list[i];
      this.list[i] = this.list[r];
      this.list[r] = tmp;
    }
    this.BigList = this.random(this.list, 1);
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

  .gallery-list {
    display: grid;
    grid-auto-rows: 260px;
    grid-template-columns: repeat(auto-fit, 390px);
    justify-content: center;
    grid-row-gap: 20px;
    grid-column-gap: 30px;
    grid-auto-flow: dense;
  }

  img {
    object-fit: contain;
    width: 100%;
  }

  .big {
    grid-row: span 2;
    grid-column: span 2;
  }

  @media (max-width: 1000px) {
    .gallery-list {
      display: block;
      padding: 0 10px;
    }
    img {
      margin-bottom: 10px;
    }
  }
</style>
