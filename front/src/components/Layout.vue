<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
        <v-menu
          offset-y
        >
            <template v-slot:activator="{ attrs, on }">

            <v-btn
                class="white--text ma-5"
                v-on="on"
                v-bind="attrs"
            >
                Usuario
            </v-btn>
            
            </template>

            <v-list>
                 <v-list-item link @click="cadastrarCliente">
                     Cadastrar Usuario
                 </v-list-item>
                 <v-list-item link @click="editarUsuario">
                     Editar Usuario
                 </v-list-item>
                <v-list-item link @click="listarUsuarios">
                     Listar Usuarios
                 </v-list-item>
            </v-list>
            
            

        </v-menu>
        <v-menu
          offset-y
        >
            <template v-slot:activator="{ attrs, on }">

            <v-btn
                class="white--text ma-5"
                v-on="on"
                v-bind="attrs"
            >
                Cardapio
            </v-btn>
            
            </template>

            <v-list>
                 <v-list-item link @click="editarCardapio">
                     Listar e Editar um cardapio existente
                 </v-list-item>
                 <v-list-item link @click="cadastrarCardapio">
                     Criar um novo cardapio
                 </v-list-item>
            </v-list>
        </v-menu>

         <v-menu
          offset-y
        >
            <template v-slot:activator="{ attrs, on }">

            <v-btn
                class="white--text ma-5"
                v-on="on"
                v-bind="attrs"
            >
                Restaurantes
            </v-btn>
            
            </template>

            <v-list>
                 <v-list-item link @click="cadastrarRestaurante">
                    Cadastrar um Restaurante
                 </v-list-item>
                 <v-list-item link @click="editarRestaurante">
                    Editar um Restaurante
                 </v-list-item>
                <v-list-item link @click="listarRestaurantes">
                    Listar Restaurantes
                 </v-list-item>
            </v-list>
            
            
            
        </v-menu>
            <h1 class="texto">Ambulanche</h1>
        </v-app-bar>
            
        <v-main style="padding:75px">
            <router-view>

            </router-view>
        </v-main>
        
    </v-app>
    
</template>
<script>

export default({
    name: 'Layout',
    methods: {
        cadastrarCliente(){
            this.$router.push({name:"usuarios"})
        },
        cadastrarRestaurante(){
            this.$router.push({name:"restaurante"})
        },
        cadastrarCardapio(){
            this.$router.push({name:"cadastrar-cardapio"})
        },
        editarUsuario(){
            this.$router.push({name:"editar-usuario"})
        },
        editarRestaurante(){
            this.$router.push({name:"editar-restaurante"})
        },
        listarUsuarios(){
            this.$router.push({name:"listar-usuarios"})
        },
        listarRestaurantes(){
            this.$router.push({name:"listar-restaurantes"})
        },
        editarCardapio(){
            this.$router.push({name:"editar-cardapio"})
        }
    }
})
</script>

<style scoped>
.texto{
    padding-left: 400px;
}
</style>