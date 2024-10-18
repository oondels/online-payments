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

    <div class="academia-info">
      <div class="card-informativo-academia">
        <div class="title">
          <div class="vantagem-title title p-3">
            <h1 class="p-0 m-0">Teste</h1>
            <span>Teste?</span>
          </div>
        </div>

        <p class="text-left p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          possimus ea sint, alias ad tenetur accusantium facilis, blanditiis,
          voluptates qui laudantium? Dolorem distinctio ratione maxime qui
          accusamus assumenda quibusdam rerum!
        </p>

        <div class="info-actions">
          <v-btn>Entre em Contato</v-btn>
        </div>
      </div>
      backgound content
    </div>

    <div class="contato-academia">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import SlidesProgramas from "../components/SlidesProgramas.vue";
import Vantagens from "../components/Vantagens.vue";

export default {
  name: "Home",

  components: { Contact, SlidesProgramas, Vantagens },

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

/* Academia Info */
.academia-info {
  /* background-color: #acaaaa; */
  border: #dfdfdf 1px solid;
  height: 100vh;
  position: relative;
}

.card-informativo-academia {
  position: absolute;
  background-color: #ffffff;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  left: 10px;
  top: 60px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}

/* Contato */
.contato-academia {
  height: 80vh;
}
</style>
