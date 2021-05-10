<template>
    
      <v-form>
    <v-row>
         <v-col cols="12" sm="12" md="12" lg="12">
                <h1>Dados do Restaurante</h1>
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
                v-model="cnpj"
                label="CNPJ"
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
                v-model="cpf"
                label="CPF do dono do restaurante"
                required
            ></v-text-field>
        </v-col>
       
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <h1>Endereço</h1>
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
        </v-row>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2">
                <v-btn
            
                color="green"

                >
                    Cadastrar
                </v-btn>
            </v-col>
            <v-col cols="12" sm="2" md="2" lg="2">
                <v-btn
            
                color="red"

                >
                    Cancelar
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

export default({
    name: "CadastrarRestaurante",
    data() {
        return {
            nome: '',
            cpf: '',
            cnpj: '',
            rua: '',
            cidade: '',
            estado: '',
            bairro: '',
            telefone: '',
            cep: '',
            tipo: '',
            numero: '',
            mensagem: '',
            dialog: false,

        }
    },
    created(){

    },
    methods: {
        /*
        save(){
            if(this.nome && this.cnpj && this.rua && this.cidade && this.estado && 
            this.bairro && this.telefone && this.cep && this.numero){
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
        },*/
    },

    props: {
        editing: {
            type: Boolean,
            default: false
        }
    }
})
</script>
