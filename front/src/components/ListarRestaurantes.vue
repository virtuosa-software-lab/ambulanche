<template>
  <div>
    <v-card>
      <v-card-title>
        Usuarios
      </v-card-title>
      <v-data-table
        :items="items"
        :headers="headers"
      ></v-data-table>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ mensagem }}
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Voltar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import User from "../clients/rest/rest";

export default {
  name: "ListarRestaurantes",
  data() {
    return {
      items: [],
      dialog: false,
      mensagem: '',
      headers: [
      {text: 'id', value: 'id'},
      {text: 'nome', value: 'nome'},
      {text: 'cnpj', value: 'cnpj'},
      {text: 'ID dono', value: 'usuarioId'},
      {text: 'telefone', value: 'telefone'},
      {text: 'cep', value: 'cep'},
      {text: 'Bairro', value: 'bairro'},
      {text: 'Rua', value: 'rua'},
      {text: 'Numero', value: 'numero'}
      ]

    };
  },
  created() {
      this.buscarRests()
  },
  methods: {
    buscarRests() {
      User.getRests()
        .then((response) => {
          this.items = response;
          console.log(this.items);
        })
        .catch((error) => {
          this.dialog = true;
          this.mensagem = "Erro ao buscar usuarios";
          console.log(error);
        });
    },
  },
};
</script>
