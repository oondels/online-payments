<template>
  <div class="vantagen_container">
    <div
      class="text-vantagem d-flex flex-column justify-content-center align-items-left"
    >
      <div class="vantagem-title title pl-3">
        <h1>Porque</h1>
        <span>Procurar?</span>
      </div>

      <div class="vantagem-text-content p-3">
        <p class="text-justify">
          Com a Aeesi, não há mais desculpas para perder o treino. Academia
          abertas sete dias por semana, e oferecendo modalidades incríveis por
          um preço acessível, você pode escolher como, onde e quando se
          exercitar. A Aeesi também ajuda centenas de jovens com bolsas e
          auxílios!!
        </p>

        <div class="vantagem-action d-flex flex-row justify-content-left">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn variant="flat" color="success" v-bind="activatorProps">
                Saiba Mais <span class="mdi mdi-open-in-new"> </span>
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-title class="text-center">
                  <strong class="title-info">Sobre Nossa Academia</strong>
                </v-card-title>
                <v-card-text>
                  <div class="sobre-academia">
                    <p>
                      <i class="mdi mdi-heart-outline"></i>
                      <strong>A Aeesi</strong> é o lugar perfeito para quem
                      busca saúde e bem-estar em um ambiente motivador e
                      acolhedor. Localizada em frente a uma bela lagoa, nossa
                      academia oferece um cenário inspirador, onde você pode
                      aproveitar não só as atividades físicas dentro de nossas
                      instalações, mas também um espaço ao ar livre para
                      caminhadas, cooper e momentos de relaxamento.
                    </p>

                    <p>
                      <i class="mdi mdi-calendar-week"></i>
                      <strong>Funcionamento</strong>: Aberta sete dias por
                      semana, oferecemos uma variedade de modalidades incríveis
                      e acessíveis, permitindo que você escolha como, onde e
                      quando quer se exercitar. Nosso compromisso é com a
                      qualidade de vida, e por isso também oferecemos programas
                      de bolsas e auxílios que apoiam jovens na busca por um
                      futuro mais saudável e ativo.
                    </p>

                    <p>
                      <i class="mdi mdi-dumbbell"></i>
                      <strong>Nossa Missão</strong>: Na Aeesi, acreditamos que o
                      exercício é para todos e estamos aqui para ajudar você a
                      alcançar seus objetivos de maneira personalizada, em um
                      ambiente motivador e cheio de energia positiva. Venha
                      fazer parte dessa comunidade!
                    </p>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text="Fechar"
                    variant="outlined"
                    color="danger"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </div>

    <div class="slides-academia">
      <v-carousel
        class="p-3"
        height="100%"
        show-arrows="hover"
        cycle
        :interval="3000"
        hide-delimiter-background
        hide-delimiters
      >
        <v-carousel-item v-for="(img, i) in images" :key="i">
          <v-sheet>
            <v-img
              :src="images[i]"
              class="gradient-overlay"
              style="background-position: center 10%"
              cover
            ></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vantagens",

  data() {
    return {
      images: [
        "/home/cards/card-slide-home/jiu-jitsu.jpg",
        "/home/cards/card-slide-home/runner.jpg",
        "/home/cards/card-slide-home/musculacao.jpg",
        "/home/cards/card-slide-home/boxe.jpg",
      ],
    };
  },
};
</script>

<style scoped>
/* Vantagens */
.vantagen_container {
  height: 80vh;
  display: grid;
  grid-template-columns: 700px auto;
}

.gradient-overlay {
  height: 700px;
}

.gradient-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
  z-index: 1;
}

.sobre-academia {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.sobre-academia p {
  margin-bottom: 20px;
  font-size: 16px;
  text-align: justify; /* Justifica o texto para uma aparência agradável */
}

.sobre-academia i {
  color: #4caf50; /* Verde para os ícones */
  font-size: 24px;
  margin-right: 10px;
  vertical-align: middle; /* Alinha o ícone com o texto */
}

.sobre-academia strong {
  font-size: 18px;
  color: #333; /* Cor mais forte para o título */
}

.title-info {
  font-size: 23px;
  color: #4caf50;
}

@media screen and (max-width: 1200px) {
  .vantagen_container {
    grid-template-columns: 450px auto;
  }

  .gradient-overlay {
    height: 600px;
  }
}

@media screen and (max-width: 800px) {
  .vantagen_container {
    display: flex;
    flex-direction: column;
  }

  .gradient-overlay {
    height: 400px;
  }
}

@media screen and (max-width: 550px) {
  .sobre-academia {
    padding: 15px; /* Reduz o padding para caber melhor em telas menores */
    box-shadow: none; /* Remove a sombra em telas pequenas para um visual mais leve */
  }

  .sobre-academia p {
    font-size: 14px; /* Reduz o tamanho da fonte para melhor leitura em telas pequenas */
    margin-bottom: 15px; /* Reduz o espaçamento entre parágrafos */
  }

  .sobre-academia i {
    font-size: 20px; /* Reduz o tamanho dos ícones para não ocupar muito espaço */
    margin-right: 8px;
  }

  .sobre-academia strong {
    font-size: 16px; /* Diminui o tamanho do texto forte */
  }
}

@media screen and (max-width: 500px) {
  .vantagen_container {
    margin-bottom: 150px;
  }
}
</style>
