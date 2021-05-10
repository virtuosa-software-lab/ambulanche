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
import User from "../clients/user/user";

export default {
  name: "CadastrarUsuario",
  data() {
    return {
      items: [],
      dialog: false,
      mensagem: '',
      headers: [
      {text: 'id', value: 'id'},
      {text: 'nome', value: 'nome'},
      {text: 'cpf', value: 'cpf'},
      {text: 'rg', value: 'rg'},
      {text: 'telefone', value: 'telefone'},
      {text: 'tipo_usuario', value: 'tipo_usuario'}
      ]

    };
  },
  created() {
      this.buscarUsers()
  },
  methods: {
    buscarUsers() {
      User.getUsers()
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
