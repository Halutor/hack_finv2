<template>
  <aside class="aside">
    <div class="aside__fondocelu">
      <div class="bloqueform">
        <p class="bloqueform__titleForm">
          Postula y obtén un 10% de descuento en el programa
        </p>
        <form class="bloqueform__form" action="" @submit.prevent="getInformationUser">
          <input class="txt" type="text" placeholder="NOMBRE" v-model="usuario.nombre" />
          <input class="txt" type="text" placeholder="CELULAR" v-model="usuario.celular"/>
          <input class="txt" type="text" placeholder="CORREO ELECTRÓNICO" v-model="usuario.email"/>
          <input class="txt" type="text" placeholder="PROGRAMA" v-model="usuario.programa"/>
          <div class="bloquechekbox">
            <input type="checkbox" name="politicas" id="politicas" />
            <label class="bloquechekbox__label" for="politicas">Acepto las Políticas de privacidad.</label>
          </div>
          <router-link to="/login">
          <input class="btnForm" type="submit" value="Quiero Postular"/>
          </router-link>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
name: 'FormCelular',
  props: {

  },
  data() {
      return  {
        usuario: {
          nombre:'',
          celular:'',
          email:'',
          programa:''
        }
      }
  },

  name: 'getInformationUser',
  methods: {
    getInformationUser() {
      if(this.celular && this.email) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.celular)
        .then(usuario => {
          console.log(this.usuario)
        }).catch(err => {
          console.log(this.usuario)
        })
        //Envia formulario
      }else {
        // Error
        console.log(this.usuario)
      }
    }
  }


  // methods: {
  //   getInformationUser() {
  //     console.log(this.usuario)
  //   }
  // }


};
</script>

<style>
.aside{
  position: sticky; 
  top: 90px; 
  z-index: 120; 
  height: calc(100vh - 100px); 
  width: 40%;
  height: calc(100vh - 150px)
}

.aside__fondocelu{
    background: url('../assets/fondoCelular.svg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100%;
    display: flex;
    justify-content: center;
}

.bloqueform{
    width: 300px;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 40px; 
}

.bloqueform__titleForm{
  color: black; 
  font-size: 23px; 
  margin: 0; 
  padding: 0; 
  text-align: start; 
  font-weight: bold;
}

.bloqueform__form{
  display: flex; 
  flex-direction: column; 
  gap: 20px
}

.txt {
  height: 50px;
  border-radius: 10px;
  border: 1px solid;
  padding: 5px 10px;
}

.bloquechekbox{
  display: flex; 
  gap: 10px; 
  font-weight: bold;
}

.bloquechekbox__label{
  color: black;
  display: flex;
  align-items: center;
}

.btnForm{
  cursor: pointer;
  padding: 25px; 
  background: #5640ff; 
  color: white; 
  border-radius: 5px; 
  margin-top: 40px; 
  border: none; 
  font-size: 18px; 
  font-weight: bold;
  transition: .5s background ease;
}

.btnForm:hover{
  background: #3e25fc;
}


input[type="checkbox"]:not(old) {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

input[type="checkbox"]:not(old) + label {
  cursor: pointer;
}

input[type="checkbox"]:not(old) + label:before {
  content: "";
  width: 15px;
  height: 15px;
  border: 1px double black;
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  margin-right: 5px;
}

input[type="checkbox"]:not(old):checked + label:before {
  box-shadow: inset 0 0 1px 2px white;
  background: #5640ff;
}


@media(max-width: 1372px){
  .aside{
    width: 100%;
    z-index: 0;
    height: 100vh;
  }
  .bloqueform {
    width: 250px;
    gap: 0;
  }
  .bloqueform__titleForm {
    font-size: 19px;
  }
  .btnForm {
    margin-top: 0;
  }
}

@media(max-device-width: 500px){
  .aside{ 
    margin-top: 50px;
  }

  .aside__fondocelu {
    background: none;
  }
}
</style>