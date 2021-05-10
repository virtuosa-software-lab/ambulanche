<template>
  <v-form>
    <v-row>
      <v-col v-if="editing" cols="12" sm="12" md="12" lg="12">
        <v-select :items="items" label="Restaurante da edição" @change="selectRest($event)">
          <template v-slot:selection="{ item }">
            {{ item.nome }} - {{ item.cnpj }}
          </template>
          <template v-slot:item="{ item }"> {{ item.nome }} - {{ item.cnpj }} </template>
        </v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12">
        <h1>Dados do Restaurante</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="nome"
          label="Nome do Restaurante"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="cnpj" label="CNPJ" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          v-model="telefone"
          label="telefone"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-select :items="itemsUser" label="Selecione o Usuário Dono" @change="selectUser($event)">
          <template v-slot:selection="{ item }">
            {{ item.nome }} - {{ item.cpf }}
          </template>
          <template v-slot:item="{ item }">
            {{ item.nome }} - {{ item.cpf }}
          </template>
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <h1>Endereço</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="cep" label="CEP" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="bairro" label="Bairro" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="rua" label="Rua" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="cidade" label="Cidade" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="estado" label="Estado" required outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="numero" label="Numero" required outlined></v-text-field>
      </v-col>
       <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field v-model="complemento" label="Complemento" required outlined></v-text-field>
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
import Rest from "../clients/rest/rest";
import User from "../clients/user/user";

export default {
  name: "CadastrarRestaurante",
  data() {
    return {
      nome: '',
      cnpj: '',
      rua: '',
      cidade: '',
      estado: '',
      bairro: '',
      telefone: '',
      cep: '',
      numero: '',
      mensagem: '',
      dialog: false,
      itemsUser: [],
      items: [],
      userId: '',
      id: '',
      complemento: '',
    };
  },
  created() {
    if(this.editing){
        this.buscarRests();
    }
    this.buscarUsers();
  },
  methods: {
    save() {
      if (
        this.nome &&
        this.cnpj &&
        this.rua &&
        this.cidade &&
        this.estado &&
        this.bairro &&
        this.telefone &&
        this.cep &&
        this.numero &&
        this.userId
      ) {
        let rest = {
          nome: this.nome,
          cnpj: this.cnpj,
          rua: this.rua,
          cidade: this.cidade,
          estado: this.estado,
          bairro: this.bairro,
          telefone: this.telefone,
          cep: this.cep,
          numero: this.numero,
          complemento: this.complemento,
          usuarioId: this.userId,
        };

        if (!this.editing) {
          Rest.saveRest(rest)
            .then((response) => {
              this.mensagem = "Restaurante cadastrado";
              this.dialog = true;
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              this.mensagem = "Erro na API";
              this.dialog = true;
            });
        } else {
          rest.id = this.id;
          Rest.editRest(rest)
            .then((response) => {
              this.mensagem = "Restaurante Editado";
              this.dialog = true;
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              this.mensagem = "Erro na API";
              this.dialog = true;
            });
        }
      } else {
        this.mensagem = "Algum dado está vázio";
        this.dialog = true;
      }
    },
    buscarRests() {
      Rest.getRests()
        .then((response) => {
          this.items = response;
          console.log(response)
        })
        .catch((error) => {
          this.mensagem = "Erro ao buscar restaurantes";
          this.dialog = true;
          console.log(error);
        });
    },
    buscarUsers() {
      User.getUsers()
        .then((response) => {
          this.itemsUser = response;
          console.log(response)
        })
        .catch((error) => {
          this.dialog = true;
          this.mensagem = "Erro ao buscar usuarios";
          console.log(error);
        });
    },
    selectUser(user) {
      this.userId = user.id;
    },
    selectRest(rest) {
      this.cnpj = rest.cnpj;
      this.nome = rest.nome;
      this.rua = rest.rua;
      this.cidade = rest.cidade;
      this.estado = rest.estado;
      this.bairro = rest.bairro;
      this.telefone = rest.telefone;
      this.cep = rest.cep;
      this.numero = rest.numero;
      this.complemento = rest.complemento;
      this.userId = rest.usuarioId;
      this.id = rest.id
    },
  },
  

  props: {
    editing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
