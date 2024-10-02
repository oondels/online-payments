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
    <div class="table">
      <table>
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

                      <div class="user-content">
                        <ul v-if="!paying" class="user-informations">
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

                        <div class="payment-container" v-if="paying">
                          <v-progress-circular
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
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
                        @click="isActive.value = false"
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
  </div>

  <alert ref="alert" />
</template>

<script>
import Alert from "@/components/Alert.vue";
import axios from "axios";
import ip from "../ip.js";

export default {
  name: "Pamagamento",

  components: { Alert },

  data() {
    return {
      clients: null,
      paymentStatus: null,

      inputCpf: "",

      loading: false,
      paying: false,
    };
  },

  // return this.$refs.alert.mostrarAlerta(
  //   "success",
  //   "done_outline",
  //   "Sucesso",
  //   "Pagamento Cocluido."
  // );

  mounted() {
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

    monthlyPayment(client, coursePrice = 40, method = "pix") {
      console.log(client);
      this.paying = !this.paying;

      // axios
      //   .post(`http://localhost:2399/client-monthly-payment`, {
      //     client: client,
      //     price: coursePrice,
      //     method: method,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Erro ao efetuar pagamento: ", error);
      //     alert("Erro ao efetuar pagamento");
      //   });
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

table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Arial", sans-serif;
}

thead {
  background-color: #3498db;
  color: white;
  text-align: left;
}

th,
td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

td {
  color: #333;
  cursor: pointer;
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
