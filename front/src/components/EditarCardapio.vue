<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-select
          :items="items"
          label="Selecione o Restaurante"
          @change="selectRest($event)"
        >
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
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-select
          :items="cardapios"
          label="Selecione o Cardapio"
          @change="selectCardapio($event)"
        >
          <template v-slot:selection="{ item }">
            Titulo do cardapio: {{ item.titulo }}
          </template>
          <template v-slot:item="{ item }">
            Titulo do cardapio: {{ item.titulo }}
          </template>
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2" md="2" lg="2">
        <v-btn color="green" @click="nextFase"> Pesquisar </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-card>
          <v-card-title> Produtos </v-card-title>
          <v-data-table :items="produtos" :headers="headers">
            <template v-slot:item.actions="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-on="on"
                    v-bind="attrs"
                    class="mr-2"
                    @click="excluirProduto(item.id)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <span>Excluir</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2" lg="2">
        <v-btn color="green" @click="AdcProduto"> Adicionar um Produto </v-btn>
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

    <v-dialog v-model="dialog2" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ mensagem }}
        </v-card-title>
        <v-form>
          <v-text-field
            v-model="nomeProduto"
            label="Nome do Produto"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="valorProduto"
            label="Valor do Produto"
            required
            outlined
          ></v-text-field>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog2 = false"> Voltar </v-btn>
          <v-btn color="green" text @click="adicionarProdutoNovo">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
import Cardapio from "../clients/cardapio/cardapio";
import Rest from "../clients/rest/rest";
import Produto from "../clients/produto/produto";

export default {
  name: "EditarCardapio",
  data() {
    return {
      nome: "",
      mensagem: "",
      dialog: false,
      dialog2: false,
      nomeProduto: "",
      valorProduto: "",
      items: [],
      cardapios: [],
      id: "",
      complemento: "",
      idCardapio: "",
      proximo: true,
      produtos: [],
      headers: [
        { text: "id", value: "id" },
        { text: "titulo", value: "nome" },
        { text: "valor", value: "valor" },
        {
          text: 'Opções',
          align: 'center',
          value: 'actions',
          sortable: false,
        },
      ],
    };
  },
  created() {
    this.buscarRests();
  },
  methods: {
    nextFase() {
      Produto.getProdutos(this.idCardapio)
        .then((response) => {
          console.log(response);
          this.produtos = response;
        })
        .catch((error) => {
          this.mensagem = "Nao foi possivel buscar produtos";
          this.dialog = true;
          console.log(error);
        });
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
      this.buscarCardapios();
    },
    selectCardapio(rest) {
      this.idCardapio = rest.id;
    },
    buscarCardapios() {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      Cardapio.getCardapio(this.id)
        .then((response) => {
          this.cardapios = response;
          console.log(response);
        })
        .catch((error) => {
          this.mensagem = "Erro ao buscar Cardapios";
          this.dialog = true;
          console.log(error);
        });
    },
    AdcProduto() {
      this.dialog2 = true;
    },
    adicionarProdutoNovo() {
      if (this.nomeProduto && this.valorProduto && this.idCardapio) {
        const produto = {
          nome: this.nomeProduto,
          valor: this.valorProduto,
        };
        Produto.saveProduto(produto, this.idCardapio)
          .then(() => {
            this.mensagem = "Produto cadastrado";
            this.dialog = true;
            this.nextFase();
          })
          .catch((error) => {
            this.message = "Erro na API";
            this.dialog = true;
            console.log(error);
          });
      } else {
        this.mensagem = "Algum dado está vázio";
        this.dialog = true;
      }
      this.dialog2 = false;
    },
    excluirProduto(id){
        Produto.excluirProduto(id).then(() => {
            this.mensagem = "produto excluido com sucesso"
            this.dialog = true;
            this.nextFase();
        }).catch(() => {
            this.mensagem = "Nao foi possivel excluir o produto"
            this.dialog = true;
        })
    }
  },

  props: {},
};
</script>
