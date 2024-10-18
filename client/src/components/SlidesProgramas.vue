<template>
  <v-carousel
    height="300"
    show-arrows="hover"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item>
      <v-sheet height="100%">
        <div
          class="card-programa-container d-flex flex-row fill-height justify-content-around align-items-center"
        >
          <v-hover
            v-for="(curso, i) in cursos1"
            :key="i"
            v-slot:default="{ isHovering, props }"
          >
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img
                :src="images1[i]"
                height="320px"
                width="100%"
                class="gradient-overlay"
                cover
              >
                <div class="card-content content text-left">
                  <div class="title-card-programa">
                    <h4>{{ curso }}</h4>
                  </div>

                  <p>
                    {{ descriptions1[i] }}
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
                            <div class="horarios">
                              <i class="mdi mdi-clock-outline"></i>
                              <strong>Horários: </strong>
                              <span>Segunda a Sexta - 07:00 às 21:00</span>
                            </div>

                            <div class="professores">
                              <i class="mdi mdi-teach"></i>
                              <strong>Professores: </strong>
                              <span>João Silva, Ana Costa</span>
                            </div>

                            <div class="valores">
                              <i class="mdi mdi-currency-usd"></i>
                              <strong>Valores: </strong>
                              <span>R$ 200,00/mês</span>
                            </div>
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

    <v-carousel-item>
      <v-sheet height="100%">
        <div
          class="card-programa-container d-flex flex-row fill-height justify-content-around align-items-center"
        >
          <v-hover
            v-for="(curso, i) in cursos2"
            :key="i"
            v-slot:default="{ isHovering, props }"
          >
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img
                :src="images2[i]"
                height="320px"
                width="100%"
                class="gradient-overlay"
                cover
              >
                <div class="card-content content text-left">
                  <div class="title-card-programa">
                    <h4>{{ curso }}</h4>
                  </div>

                  <p>
                    {{ descriptions2[i] }}
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

    <v-carousel-item>
      <v-sheet height="100%">
        <div
          class="card-programa-container d-flex flex-row fill-height justify-content-around align-items-center"
        >
          <v-hover
            v-for="(curso, i) in cursos3"
            :key="i"
            v-slot:default="{ isHovering, props }"
          >
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img
                :src="images3[i]"
                height="320px"
                width="100%"
                class="gradient-overlay"
                cover
              >
                <div class="card-content content text-left">
                  <div class="title-card-programa">
                    <h4>{{ curso }}</h4>
                  </div>

                  <p>
                    {{ descriptions3[i] }}
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

      cursos1: ["Jiu-Jitsu", "Musculação"],
      descriptions1: [
        "Arte marcial focada em técnicas de defesa pessoal e combate corpo a corpo, ideal para desenvolver força, flexibilidade e autocontrole.",
        "Treino voltado para o ganho de força e resistência muscular, perfeito para quem busca tonificar o corpo e melhorar o condicionamento físico.",
      ],
      images1: ["/home/cards/jiu-jitsu.jpg", "/home/cards/musculacao.jpg"],

      cursos2: ["Rit-Lud", "Boxe"],
      descriptions2: [
        "Treino intenso e dinâmico, que mistura técnicas de boxe e exercícios funcionais, ideal para queimar calorias e melhorar o condicionamento físico.",
        "Esporte dinâmico que combina técnicas de socos e movimentos rápidos, proporcionando uma excelente forma de melhorar a agilidade e o condicionamento.",
      ],
      images2: ["/home/cards/hitbox.jpg", "/home/cards/boxe.jpg"],

      cursos3: ["Power Funcional"],
      descriptions3: [
        "Treinamento funcional de alta intensidade que trabalha todo o corpo, desenvolvendo força, equilíbrio e condicionamento cardiovascular.",
      ],
      images3: ["/home/cards/power-funcional.jpg"],

      professores1: [],
      professores2: [],
      professores3: [],
      valor1: [],
      valor2: [],
      valor3: [],
      horarios1: [],
      horarios2: [],
      horarios3: [],
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
    rgba(0, 0, 0, 0.2)
  );
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

.horarios,
.professores,
.valores {
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Espaçamento entre os itens */
  font-size: 16px; /* Tamanho da fonte para textos */
  color: #333; /* Cor padrão do texto */
}

.horarios i,
.professores i,
.valores i {
  font-size: 24px; /* Tamanho dos ícones */
  color: #4caf50; /* Cor verde para ícones */
  margin-right: 10px; /* Espaçamento entre ícone e texto */
}

.horarios strong,
.professores strong,
.valores strong {
  font-weight: bold;
  margin-right: 5px; /* Espaço entre o texto forte e o valor */
}

.horarios span,
.professores span,
.valores span {
  color: #666; /* Cor secundária para o texto adicional */
}

.horarios {
  background-color: #e3f2fd; /* Cor de fundo clara (azul) */
  border-left: 4px solid #2196f3; /* Barra lateral azul */
  padding: 10px;
  border-radius: 8px;
}

.professores {
  background-color: #f1f8e9; /* Cor de fundo clara (verde) */
  border-left: 4px solid #4caf50; /* Barra lateral verde */
  padding: 10px;
  border-radius: 8px;
}

.valores {
  background-color: #fff3e0; /* Cor de fundo clara (laranja) */
  border-left: 4px solid #ff9800; /* Barra lateral laranja */
  padding: 10px;
  border-radius: 8px;
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
