<template>
  <v-layout row>
    <v-flex xs6 sm5 offset-sm1>
      <div>
        <v-card>
          <v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">Registro de Usuario</div>
                <span class="grey--text">Ingresa tu Usuario y Contraseña</span>
              </div>
            </v-card-title>
          </v-card-media>
          <v-layout>
            <v-flex xs5>
              <v-text-field
                label="Nombre"
                v-model.trim="name"
                required
              ></v-text-field><!-- Colocar código que conecte con vuelidate y vuetify--> 
              <div>
                <span class="form-group__message myError" v-if="!$v.name.required">El nombre del usuario es un campo requerido</span>
              </div>
            </v-flex>
            <v-flex xs5>
              <v-text-field
                label="Username"
                v-model="username"
                @blur="$v.username.$touch()"

              ></v-text-field>
              <!--<div>
                <span class="form-group__message myError" v-if="!$v.username.required">El username es un campo requerido</span>
              </div> -->
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs10>
              <v-text-field
                label="Contraseña"
                v-model="pass"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs10>
              <v-text-field
                label="Repetir Contraseña"
                v-model="repeatPass"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </v-flex>
      <!--Tarjeta 2-->
    <v-flex xs6 sm5>
      <v-card>
        <v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">Enlace de Datos</div>
              <p></p>
            </div>
          </v-card-title>
        </v-card-media>
        <v-layout>
          <v-flex xs10>
            <v-text-field
              label="Username"
              class="input-group--focused"
              v-model="username"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs10>
            <v-text-field
              label="Contraseña"
              class="input-group--focused"
              v-model="pass"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default{
  data: function () {
    return {
      username: '',
      pass: '',
      repeatPass: '',
      name: ''
    }
  },
  validations: {
    pass: {
      required,
      minLength: minLength(6)
    },
    repeatPass: {
      sameAsPass: sameAs('pass')
    },
    username: {
      required
    },
    name: {
      required,
      minLength: minLength(6)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myError{
  color: red;
}
.flex {
  padding-left: 25px;
}
</style>
