<template>
  <div id="contact" class="container-contact">
    <div class="social-contact">
      <div class="container-contact-me">
        <div class="contact-me">
          <img src="/img/contact.png" alt="" />
        </div>
        <div class="work-together">
          <h2 class="text-center pb-2">Vamos Trabalhar Juntos!</h2>
        </div>
      </div>
      <div class="socials">
        <div class="lets-work">
          <h4 class="text-center">Me mande uma mensagem</h4>
          <h5 class="text-center text-success">
            Ou apenas olhe minha redes sociais
          </h5>
        </div>
        <div class="icons">
          <a href="https://www.instagram.com/hendriusfelix/" target="_blank"
            ><i
              class="mdi mdi-instagram mdi-24px"
              title="instagram.com/hendriusfelix"
            ></i
          ></a>

          <a href="https://www.instagram.com/hendriusfelix/" target="_blank"
            ><i
              class="mdi mdi-whatsapp mdi-24px"
              title="instagram.com/hendriusfelix"
            ></i
          ></a>

          <a href="https://www.instagram.com/hendriusfelix/" target="_blank"
            ><i
              class="mdi mdi-email mdi-24px"
              title="instagram.com/hendriusfelix"
            ></i
          ></a>
        </div>
      </div>
    </div>

    <form class="form">
      <h1 class="text-center pb-2">Entre em Contato</h1>
      <div class="form-group position-relative">
        <input
          v-model="emailDetails.name"
          type="text"
          id="formName"
          class="mb-2 form-control form-control-lg thick"
          placeholder="Nome"
        />
      </div>

      <div class="form-group position-relative">
        <input
          v-model="emailDetails.email"
          type="email"
          id="formEmail"
          class="mb-2 form-control form-control-lg thick"
          placeholder="E-mail"
        />
      </div>

      <div class="form-group position-relative">
        <input
          v-model="emailDetails.phone"
          type="text"
          id="formCel"
          class="mb-2 form-control form-control-lg thick"
          placeholder="Telefone"
        />
      </div>

      <div class="form-group message">
        <textarea
          v-model="emailDetails.message"
          id="formMessage"
          class="mb-2 form-control form-control-lg"
          rows="7"
          placeholder="Mensagem"
        ></textarea>
      </div>

      <div class="text-center">
        <v-btn
          :disabled="emailSend"
          :loading="emailSend"
          block
          class="text-none mb-4"
          color="success"
          size="x-large"
          variant="flat"
          @click="sendEmail"
        >
          Enviar
        </v-btn>
      </div>
    </form>
  </div>
  <Alert ref="alert" />
</template>

<script>
import axios from "axios";
// import baseUrl from "../../baseUrl";
import Alert from "./Alert.vue";

export default {
  name: "ContactComponent",

  components: {
    Alert,
  },

  data() {
    return {
      emailSend: false,
      emailDetails: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },

  methods: {
    sendEmail() {
      if (!this.emailDetails.name) {
        return this.$refs.alert.mostrarAlerta(
          "warning",
          "report",
          "Erro!",
          "Por favor, preencha o seu nome."
        );
      }

      if (!this.emailDetails.message) {
        return this.$refs.alert.mostrarAlerta(
          "warning",
          "report",
          "Erro!",
          "Adicione uma mensagem para conversarmos."
        );
      }
      this.emailSend = true;

      //   axios
      //     .post(baseUrl + "/send-email", this.emailDetails)
      //     .then((response) => {
      //       this.$refs.alert.mostrarAlerta(
      //         "success",
      //         "done_outline",
      //         "Sucesso",
      //         `${response.data}`
      //       );
      //       console.log(response.data);
      //     })
      //     .catch((error) => {
      //       this.$refs.alert.mostrarAlerta(
      //         "danger",
      //         "warning",
      //         "Erro",
      //         "Erro de comunicação... Estamos trabalhando para consertar, tente contato por Whatsapp -> +55 (75) 982466403"
      //       );
      //       console.error("Error communicating with the server:", error);
      //     })
      //     .finally(() => {
      //       this.emailSend = false;
      //     });
    },
  },
};
</script>

<style scoped>
.container-contact {
  height: 90vh;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "social-contact form";
  align-items: center;
}

.social-contact {
  grid-area: social-contact;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  grid-area: form;
}

.contact-me {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contact-me img {
  width: 200px;
  margin-bottom: 50px;
}

.socials {
  max-width: 450px;
  padding: 10px;
  margin-right: 20px;
  background-color: #f2f6f8;
  color: #212529;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
}

.socials .icons {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.icons i {
  color: #212529 !important;
}

.lets-work {
  font-weight: 600;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 30px;
}

.icons i {
  color: #212529;
  font-size: 20px;
}

form {
  max-width: 30rem;

  .title {
    color: #212529;
    font-size: 2.5rem;
  }

  .form-control {
    background-color: #f2f6f8;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);

    &.thick {
      height: 3rem;
      padding: 0.5rem 2rem;
    }

    &:focus {
      background-color: #ebebeb;
      border: none;
      box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
    }
  }

  .message .form-control {
    padding: 0.5rem 1.8rem;
  }

  ::placeholder {
    font-weight: 600;
    font-size: 1.1rem;
    color: #838788;
    position: relative;
    left: 0;
  }

  input,
  textarea {
    color: #212529;
    font-size: 1.1rem;
  }
}

.btn.btn-primary {
  font-weight: bold;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 3rem;
  background-color: #10e956;
  transition: all 0.3s ease-in-out;
}

.btn.btn-primary:hover:enabled {
  background-size: 100% 100%;
  transform: translateY(-0.15em);
  color: #212529 !important;
}

@media screen and (max-width: 880px) {
  .social-contact {
    margin-bottom: 30px;
  }

  .container-contact {
    height: auto;
    min-height: 90vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
      "social-contact"
      "form";
    align-items: center;
    justify-content: center;
    /* margin-bottom: 270px; */
  }
}

@media screen and (max-width: 490px) {
  .container-contact {
    padding: 25px;
  }
}
</style>
