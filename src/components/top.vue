<template>
  <section>
    <h1>Otak Holy Place Photo</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/img/top.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
h1 {
  font-weight: normal;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}
</style>
