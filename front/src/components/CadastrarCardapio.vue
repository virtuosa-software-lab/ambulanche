<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-select :items="items" label="Selecione o Restaurante" @change="selectRest($event)">
          <template v-slot:selection="{ item }">
            Nome do restaurante: {{ item.nome }} - CNPJ: {{ item.cnpj }}
          </template>
          <template v-slot:item="{ item }">
            Nome do restaurante: {{ item.nome }} - CNPJ: {{ item.cnpj }}
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12">
        <h1>Dados do Cardapio</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="nome" label="Nome" required outlined></v-text-field>
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
          <v-btn color="green" text @click="nextFase" :disabled="proximo"> Próximo </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
import Cardapio from "../clients/cardapio/cardapio";
import Rest from "../clients/rest/rest";

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
      idCardapio: '',
      proximo: true
    };
  },
  created() {
    this.buscarRests();
  },
  methods: {
    save(){
        if(this.nome && this.id){
            const cardapio = {
                titulo : this.nome,
                restauranteId: this.id
            }
            Cardapio.saveCardapio(cardapio).
            then(response => {
                this.proximo = false
                this.mensagem = "Cardapio Cadastrado"
                this.idCardapio = response.id
                console.log(this.idCardapio)
                this.dialog = true;
                
            }).catch(error => {
                this.mensagem = "Erro na API";
                this.dialog = true;
                console.log(error)
            })

        } else {
            this.mensagem = "Algum dado está vázio";
            this.dialog = true;
        }
    },
    nextFase(){
         this.$router.push({name:"cadastrar-produto", params: { id_cardapio: this.idCardapio }})
    },
    buscarRests() {
      Rest.getRests()
        .then((response) => {
          this.items = response;
          console.log(response);
        })
        .catch((error) => {
          this.mensagem = "Erro ao buscar restaurantes";
          this.dialog = true;
          console.log(error);
        });
    },
    selectRest(rest) {
      this.id = rest.id;
    },
  },

  props: {},
};
</script>
