<template>
  <v-carousel
    height="300"
    show-arrows="hover"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item v-for="(curso, i) in cursos" :key="i">
      <v-sheet height="100%">
        <div
          class="card-programa-container d-flex flex-row fill-height justify-content-around align-items-center"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img
                :src="images[i]"
                height="320px"
                class="gradient-overlay"
                cover
              >
                <div class="card-content content text-left">
                  <div class="title-card-programa">
                    <h4>{{ curso }}</h4>
                  </div>

                  <p>
                    {{ descriptions[i] }}
                  </p>
                  <div class="align-self-center">
                    <v-dialog max-width="750">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                          v-bind="activatorProps"
                          :color="transparent"
                          :class="{ 'show-btn': isHovering }"
                          class="mb-2"
                          variant="outlined"
                          color="success"
                        >
                          Saiba Mais
                        </v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <v-card :title="curso">
                          <v-card-text>
                            <div class="horarios"></div>

                            <div class="professores"></div>

                            <div class="valores"></div>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              text="Fechar"
                              @click="isActive.value = false"
                            ></v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SlidePrograma",

  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",

      cursos: ["Jiu-Jitsu", "Musculação", "Rit-Lud", "Boxe", "Power Funcional"],

      descriptions: [
        "Arte marcial focada em técnicas de defesa pessoal e combate corpo a corpo, ideal para desenvolver força, flexibilidade e autocontrole.",
        "Treino voltado para o ganho de força e resistência muscular, perfeito para quem busca tonificar o corpo e melhorar o condicionamento físico.",
        "Treino intenso e dinâmico, que mistura técnicas de boxe e exercícios funcionais, ideal para queimar calorias e melhorar o condicionamento físico.",
        "Esporte dinâmico que combina técnicas de socos e movimentos rápidos, proporcionando uma excelente forma de melhorar a agilidade e o condicionamento.",
        "Treinamento funcional de alta intensidade que trabalha todo o corpo, desenvolvendo força, equilíbrio e condicionamento cardiovascular.",
      ],

      images: [
        "/home/cards/jiu-jitsu.jpg",
        "/home/cards/musculacao.jpg",
        "/home/cards/hitbox.jpg",
        "/home/cards/boxe.jpg",
        "/home/cards/power-funcional.jpg",
      ],

      professores: [],
      valor: [],
      horarios: [],
    };
  },
};
</script>

<style scoped>
/* Programas */
.show-btn {
  color: rgba(255, 255, 255, 1) !important;
}

.card-content {
  padding: 20px;
  color: #fff;
}

.gradient-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)
  );
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

@media screen and (max-width: 800px) {
  .title-card-programa h4 {
    font-size: 18px !important;
  }

  .card-content p {
    font-size: 15px;
  }
}
</style>
