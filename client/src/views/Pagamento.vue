<template>
  <div class="home">
    <h1>HelloWorld</h1>

    <v-dialog max-width="700">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">Não encontrou seu nome na lista?</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            <h3 class="text-center">Cadastre-se</h3>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <div v-if="clients" class="table">
      <table class="table-payments">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Pagamento</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.course }}</td>

            <td>
              <v-dialog max-width="700">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn v-bind="activatorProps">Pagar</v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card :title="client.name">
                    <v-card-text>
                      <h3 class="text-center">
                        Digite seu cpf para prosseguir
                      </h3>
                      <div class="check-cpf">
                        <v-text-field
                          v-model="inputCpf"
                          label="CPF"
                        ></v-text-field>
                      </div>

                      <div
                        class="user-content d-flex flex-column justify-content-center align-items-center"
                      >
                        <ul
                          v-if="!paying && !processingPayment"
                          class="user-informations"
                        >
                          <li>
                            <i class="material-icons">cake</i>
                            <span class="info-text"
                              >Data de Nascimento: {{ client.birth }}</span
                            >
                          </li>
                          <li>
                            <i class="material-icons">email</i>
                            <span class="info-text"
                              >Email: {{ client.email }}</span
                            >
                          </li>
                          <li>
                            <i class="material-icons">phone</i>
                            <span class="info-text"
                              >Telefone: {{ client.phone }}</span
                            >
                          </li>
                        </ul>

                        <div class="payment-container">
                          <v-progress-circular
                            v-if="paying"
                            indeterminate
                            color="success"
                            :size="150"
                            width="18"
                          ></v-progress-circular>

                          <div
                            class="bar-code d-flex flex-column justify-content-center align-items-center"
                            v-if="qrCode && processingPayment"
                          >
                            <qrcode
                              :value="qrCode"
                              :options="{ width: 200 }"
                            ></qrcode>

                            <a :href="qrCodeLink" target="_blank"
                              >Ou clique aqui</a
                            >
                          </div>

                          <!-- <div class="success" v-if=></div> -->
                        </div>

                        <v-btn
                          variant="outlined"
                          block
                          class="mt-2"
                          color="success"
                          @click="monthlyPayment(client)"
                          >Pagar</v-btn
                        >
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Fechar"
                        @click="
                          isActive.value = false;
                          clearPaymentData();
                        "
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-5" v-else>
      <v-progress-circular
        indeterminate
        color="success"
        :size="150"
        width="18"
      ></v-progress-circular>
    </div>
  </div>

  <alert ref="alert" />
</template>

<script>
import Alert from "@/components/Alert.vue";
import Qrcode from "@chenfengyuan/vue-qrcode";
import axios from "axios";
import ip from "../ip.js";
import { io } from "socket.io-client";

export default {
  name: "Pamagamento",

  components: { Alert, Qrcode },

  data() {
    return {
      clients: null,
      paymentStatus: null,

      inputCpf: "",

      processingPayment: false,
      paying: false,
      qrCode: "",
      qrCodeLink: "",
    };
  },

  // return this.$refs.alert.mostrarAlerta(
  //   "success",
  //   "done_outline",
  //   "Sucesso",
  //   "Pagamento Cocluido."
  // );

  mounted() {
    this.socket = io("http://localhost:2399");
    this.socket.on("payment-approved", () => {
      console.log("Pagamento Aprovado");
    });

    this.socket.on("payment-not-approved", () => {
      console.log("Pagamento pendente");
    });

    this.getClients();
  },

  methods: {
    getClients() {
      axios
        .get(`${ip}/get-academy-clients`)
        .then((response) => {
          this.clients = response.data;

          this.courses = [
            ...new Set(response.data.map((course) => course.course)),
          ];

          this.clientsNames = [response.data.map((course) => course.name)];
        })
        .catch((error) => {
          console.log("Error ao consultar servidor:", error);
        });
    },

    monthlyPayment(client) {
      this.paying = true;

      axios
        .post(`http://localhost:2399/payment/client-monthly-payment`, client)
        .then((response) => {
          console.log(response.data);
          this.paying = false;
          this.processingPayment = true;

          this.qrCode =
            response.data.point_of_interaction.transaction_data.qr_code;
          this.qrCodeLink =
            response.data.point_of_interaction.transaction_data.ticket_url;
        })
        .catch((error) => {
          console.error("Erro ao efetuar pagamento: ", error);
          alert("Erro ao efetuar pagamento");
        });
    },

    clearPaymentData() {
      this.qrCode = "";
      this.qrCodeLink = "";
      this.paying = false;
      this.processingPayment = false;
    },
  },
};
</script>

<style scoped>
/* Tabelea Usuários */
.table {
  width: 70%;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table-payments {
  width: 100%;
  border-collapse: collapse;
  font-family: "Arial", sans-serif;
}

.table-payments thead th {
  background-color: #3498db !important;
  color: white;
  text-align: left;
}

.table-payments th {
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.table-payments td {
  padding: 8px 15px;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

td {
  color: #333;
}

th {
  font-weight: bold;
}

/* Informações do Usuário */
.user-informations {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.user-informations li {
  display: flex;
  align-items: center; /* Alinha ícones e texto verticalmente */
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0; /* Linha de separação entre itens */
  color: #333;
  font-size: 16px;
}

.user-informations li:last-child {
  border-bottom: none; /* Remove a borda do último item */
}

.user-informations li i {
  margin-right: 10px; /* Espaço entre o ícone e o texto */
  color: #3498db; /* Cor dos ícones */
  font-size: 24px; /* Tamanho do ícone */
}

.user-informations li span {
  font-weight: bold; /* Destaca o rótulo de cada informação */
  color: #3498db; /* Cor moderna para o rótulo */
}

.user-informations li .info-text {
  flex-grow: 1; /* Faz o texto ocupar o espaço necessário */
}

.bar-code {
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
}

.bar-code qrcode {
  margin-bottom: 10px;
}

.bar-code a {
  font-weight: 600;
  color: #009ee3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.bar-code a:hover {
  color: #007bbd;
}

.bar-code .d-flex {
  justify-content: center;
  align-items: center;
}

.bar-code h3 {
  font-size: 18px;
  font-weight: bold;
  color: #3e4a59;
  margin-bottom: 10px;
}

.bar-code small {
  color: #7a8c99;
}

@media screen and (max-width: 768px) {
  .table {
    width: 90%;
  }

  th,
  td {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
