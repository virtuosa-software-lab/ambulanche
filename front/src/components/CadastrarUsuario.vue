<template>
    
      <v-form>
    <v-row>
        
        <v-col v-if="editing" cols="12" sm="12" md="12" lg="12">
            <v-select
                :items="items"
                label="Standard"
                @change="selectUser($event)"
        >
        <template v-slot:selection="{ item }">
            {{ item.nome }} - {{ item.cpf }}
          </template>
          <template v-slot:item="{ item }">
            {{ item.nome }} - {{ item.cpf }}
          </template>
        </v-select>
        </v-col>
         <v-col cols="12" sm="12" md="12" lg="12">
                <h1>Dados do usuario</h1>
            </v-col>
       <v-col cols="12" sm="6" md="6" lg="6">
          <v-text-field
                v-model="nome"
                label="Nome"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
             <v-text-field
                v-model="cpf"
                label="cpf"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
             <v-text-field
                v-model="rg"
                label="rg"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="telefone"
                label="telefone"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="tipo"
                label="Tipo do usuario"
                required
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <h2>Endereço</h2>
            </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="cep"
                label="CEP"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="bairro"
                label="Bairro"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="rua"
                label="Rua"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="cidade"
                label="Cidade"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="estado"
                label="Estado"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="numero"
                label="Numero"
                required
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
                v-model="complemento"
                label="Complemento"
                required
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2">
                <v-btn
            
                color="green"
                @click="save"
                >
                    Cadastrar
                </v-btn>
            </v-col>
    
        </v-row>
        <v-dialog 
            v-model="dialog"
            width="500"
        >
        <v-card>
        <v-card-title class="headline grey lighten-2">
            {{mensagem}}
        </v-card-title>
         
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
          >
            Voltar
            </v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
      </v-form>

</template>
<script>

import User from '../clients/user/user'

export default({
    name: "CadastrarUsuario",
    data() {
        return {
            nome: '',
            cpf: '',
            rg: '',
            rua: '',
            cidade: '',
            estado: '',
            bairro: '',
            telefone: '',
            cep: '',
            tipo: '',
            numero: '',
            dialog: false,
            mensagem: '',
            complemento: '',
            items: [],
            id: ''
        }
    },
    created() {
        if(this.editing){
            this.buscarUsers();
        }
    },
    methods: {
        save(){
            if(this.nome && this.cpf && this.rg && this.rua && this.cidade && this.estado && 
            this.bairro && this.telefone && this.cep && this.tipo && this.numero){
                let user = {
                    nome: this.nome,
                    cpf: this.cpf,
                    rg: this.rg,
                    rua: this.rua,
                    cidade: this.cidade,
                    estado: this.estado,
                    bairro: this.bairro,
                    telefone: this.telefone,
                    cep: this.cep,
                    tipo_usuario: this.tipo,
                    numero: this.numero,
                    complemento: this.complemento
                }

                if(!this.editing){
                    User.saveUser(user).
                    then(response =>{
                        this.mensagem= "Usuario cadastrado"
                        this.dialog = true;
                        console.log(response)

                    }).catch(error => {
                        console.log(error)
                        this.mensagem = "Erro na API"
                        this.dialog = true;
                    })
                } else {
                    user.id = this.id;
                    User.editUser(user).
                        then(response =>{
                            this.mensagem = "Usuario Editado"
                            this.dialog = true;
                            console.log(response)

                        }).catch(error => {
                            console.log(error)
                            this.mensagem = "Erro na API"
                            this.dialog = true;
                        })
                }
            } else {
                this.mensagem = "Algum dado está vázio"
                this.dialog = true;
            }
        },
        buscarUsers(){
            User.getUsers().then(response =>{
                this.items = response;
            }).catch(error =>{
                this.dialog = true;
                this.mensagem = "Erro ao buscar usuarios"
                console.log(error);
            })
        },
        selectUser(user){
            this.nome = user.nome
            this.cpf = user.cpf
            this.numero = user.numero
            this.estado = user.estado
            this.rg = user.rg
            this.telefone = user.telefone
            this.cep = user.cep
            this.estado = user.estado
            this.cidade = user.cidade
            this.tipo = user.tipo_usuario
            this.bairro = user.bairro
            this.rua = user.rua
            this.complemento = user.complemento
            this.id = user.id
        }
    },
    props: {
        editing: {
            type: Boolean,
            default: false
        }
    }
})
</script>
