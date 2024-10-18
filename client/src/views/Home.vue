<template>
  <div class="main">
    <Vantagens />

    <div class="programas-container mt-5">
      <div class="vantagem-title title pl-3">
        <h1>Confira</h1>
        <span>Nossos Itens?</span>
      </div>

      <div class="slides-programas">
        <SlidesProgramas />
      </div>
    </div>

    <InfoAcademia />

    <div class="contato-academia">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import InfoAcademia from "../components/InfoAcademia.vue";
import SlidesProgramas from "../components/SlidesProgramas.vue";
import Vantagens from "../components/Vantagens.vue";

export default {
  name: "Home",

  components: { Contact, SlidesProgramas, Vantagens, InfoAcademia },

  data() {
    return {};
  },
};
</script>

<style>
/* Title */
h1 {
  margin: 0;
  padding: 0;
}

.title {
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: calc(1.375rem + 1.5vw);
}

.title span {
  margin: 0;
  padding: 0;
  color: #1db954;
  font-weight: 900;
}

/* Programas */
.programas-container {
  height: 60vh;
}

/* Contato */
.contato-academia {
  height: 80vh;
}
</style>
