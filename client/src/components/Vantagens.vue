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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
          expedita consectetur! Neque provident dicta sapiente quasi nobis eos
          cum in? Harum, error. Accusantium autem debitis nemo dolor. Nostrum,
          perferendis qui?
        </p>

        <div class="vantagem-action d-flex flex-row justify-content-left">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn variant="flat" color="success" v-bind="activatorProps">
                Saiba Mais <span class="mdi mdi-open-in-new"> </span>
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Dialog">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text="Close Dialog"
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
        height="400"
        show-arrows="hover"
        cycle
        :interval="3000"
        hide-delimiter-background
      >
        <v-carousel-item v-for="(img, i) in images" :key="i">
          <v-sheet height="100%">
            <v-img
              :src="images[i]"
              height="320px"
              width="100%"
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
  height: 60vh;
  display: grid;
  grid-template-columns: 600px auto;
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

@media screen and (max-width: 1200px) {
  .vantagen_container {
    grid-template-columns: 450px auto;
  }
}

@media screen and (max-width: 800px) {
  .vantagen_container {
    display: flex;
    flex-direction: column;

    margin-bottom: 200px;
  }
}
</style>
