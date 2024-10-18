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
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
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
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
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
