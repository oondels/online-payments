<template>
  <div class="main">
    <div class="container">
      <Vantagens />
    </div>

    <div class="container">
      <SlidesProgramas />
    </div>

    <div class="container">
      <InfoAcademia />
    </div>

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
.main {
  display: flex;
  flex-direction: column;
}

.container {
  margin: 50px 0px;
}

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

/* Contato */
.contato-academia {
  height: 80vh;
}
</style>
