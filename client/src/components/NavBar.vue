<template>
  <nav class="nav-bar">
    <!-- Ícone de Menu para Dispositivos Móveis -->
    <i
      class="menu-icon"
      :class="menuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"
      @click="toggleMenu"
    >
    </i>

    <div class="menu-items" :class="{ show: menuOpen }">
      <router-link to="/">Home</router-link>
      <router-link to="/pagamento">Loja</router-link>
      <router-link to="/sobre">Dass</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      menuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #212121;
  color: white;
  font-family: "Roboto", sans-serif;
  position: relative;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0 20px;
  transition: color 0.3s ease;
  font-size: 18px;
}

nav a:hover {
  color: #42a025;
}

.menu-icon {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 1001;
}

.menu-items {
  display: flex;
  align-items: center;
}

.menu-items a {
  margin-right: 30px;
}

@media (max-width: 768px) {
  nav {
    background-color: transparent !important;
  }

  .menu-icon {
    display: block;
    position: fixed;
    right: 8%;
    top: 2%;
    color: #4caf50;
  }

  .menu-items {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 150px;
    flex-direction: column;
    background-color: #212121;
    padding-top: 60px;
    transition: right 0.3s ease;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  }

  .menu-items.show {
    right: 0;
    z-index: 999;
  }

  .menu-items a {
    margin: 5px 0;
    padding: 15px;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all ease-in-out 0.2s;
  }

  .menu-items a:hover {
    background-color: #0da443;
    color: white;
  }
}
</style>
