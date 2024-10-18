<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/NavBar.vue";

export default {
  data() {
    return {
      menuOpen: false,
    };
  },

  components: { Footer, Navbar },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
