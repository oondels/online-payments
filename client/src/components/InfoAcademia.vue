<template>
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
  </div>
</template>

<script>
export default {
  name: "InfoAcademia",
};
</script>

<style scoped>
/* Academia Info */
.academia-info {
  margin-top: 50px;
  margin-bottom: 50px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1)
    ),
    url("../../public/bg/academy-info.jpg");
  background-size: cover;
  background-position: center;
  border: #dfdfdf 1px solid;
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
