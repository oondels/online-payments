<template>
  <div class="academia-info">
    <v-carousel
      hide-delimiters
      height="100%"
      cycle
      :interval="5000"
      :show-arrows="false"
    >
      <v-carousel-item v-for="(img, i) in images" :key="i" :src="img" cover>
      </v-carousel-item>
    </v-carousel>

    <div class="card-informativo-academia">
      <div class="title">
        <div class="vantagem-title title p-3">
          <h1 class="p-0 m-0">Sobre a</h1>
          <span>AEESI</span>
        </div>
      </div>

      <p>
        Na AEESI, acreditamos no seu potencial para alcançar novos patamares.
        Oferecemos um ambiente motivador, onde cada membro é visto como um
        atleta em potencial, não importa o ponto de partida.
      </p>

      <div class="info-actions">
        <a href="#contact"><v-btn>Entre em Contato</v-btn></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoAcademia",

  data() {
    return {
      images: [
        "/home/slides-academia/img-1.jpg",
        "/home/slides-academia/img-2.jpg",
        "/home/slides-academia/img-3.jpg",
        "/home/slides-academia/img-4.jpg",
        "/home/slides-academia/img-5.jpg",
      ],
    };
  },
};
</script>

<style scoped>
/* Academia Info */
.card-informativo-academia {
  font-family: Arial, sans-serif;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.card-informativo-academia h2 {
  color: #333;
  font-size: 24px;
}

.card-informativo-academia .highlight {
  color: #4caf50;
}

.card-informativo-academia p {
  font-size: 16px;
  text-align: justify;
  margin-top: 10px;
  color: #666;
}

.card-informativo-academia .contact-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 15px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.card-informativo-academia .contact-btn:hover {
  background-color: #367c39;
}

.academia-info {
  margin-top: 50px;
  margin-bottom: 50px;
  height: 80vh;
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

@media screen and (max-width: 800px) {
  .card-informativo-academia {
    height: 430px;
    width: 300px;
  }
}

@media screen and (max-width: 600px) {
  .card-informativo-academia {
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 330px;
    width: 270px;
  }

  .card-informativo-academia .vantagem-title,
  .card-informativo-academia h1 {
    font-size: 20px;
  }

  .card-informativo-academia p {
    font-size: 14px;
    margin: 0;
    padding-bottom: 0;
  }
}
</style>
