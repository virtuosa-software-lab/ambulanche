<template>
    
      <v-form>
    <v-row>
         <v-col cols="12" sm="12" md="12" lg="12">
                <h1>Dado do restaurante</h1>
            </v-col>
       <v-col cols="12" sm="6" md="6" lg="6">
          <v-text-field
                v-model="cnpj"
                label="CNPJ"
                required
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="2" md="2" lg="2">
                <v-btn
                    color="green"
                >
                    Próximo
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
      </v-form>

</template>
<script>

export default({
    name: "CadastrarCardapio",
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
            numero: ''
        }
    },
})
</script>
