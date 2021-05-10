<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <h1>Dados do Produto</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="nome" label="Nome" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="valor" label="Valor do produto" required outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2" md="2" lg="2">
        <v-btn color="green" @click="save"> Cadastrar </v-btn>
      </v-col>
    </v-row>
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
  </v-form>
</template>
<script>

import Produto from "../clients/produto/produto";

export default {
  name: "CadastrarCardapio",
  data() {
    return {
      nome: '',
      mensagem: '',
      dialog: false,
      items: [],
      id: '',
      complemento: '',
      proximo: true,
      valor: '',
    };
  },
  created() {
  },
  methods: {
    save(){
        console.log(this.nome)
        console.log(this.valor)
        console.log(this.id_cardapio)
        if(this.nome && this.valor && this.id_cardapio){
            const produto = {
                nome : this.nome,
                valor: this.valor,
            }
            Produto.saveProduto(produto, this.id_cardapio).then(() => {
                this.mensagem = "Produto cadastrado"
                this.dialog = true;
            }).catch(error => {
                this.message="Erro na API"
                this.dialog = true
                console.log(error);
            });
        } else {
            this.mensagem = "Algum dado está vázio"
            this.dialog = true;
        }
    },
    nextFase(){

    }
  },

  props: {
      id_cardapio: {
          type: String,
          default: ''
      }
  },
};
</script>
