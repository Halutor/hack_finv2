<template>
  <div class="login">
    <div class="loginLeft">
      <div class="header__nav container">
        <img src="../assets/logoPacha.svg" alt="" />
      </div>
      <div class="frasetop container">
        <div class="frasetop__title">
          <p>¡Explota todo tu potencial tecnológico!</p>
        </div>
        <div class="frasetop__text">
          <p>Con nuestros programas de especialización</p>
        </div>
      </div>
      <div class="respaldoLogin">
        <div class="container">
          <h5 class="footerContent__title">Con el respaldo de:</h5>
          <div class="footerContent__img">
            <img src="../assets/intercorpWhite.svg" alt="" />
            <img src="../assets/idatWhite.svg" alt="" />
            <img src="../assets/zegelWhite.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="loginRight tabs">
      <div class="loginRight__top">
        <div class="iniciarSesion">
          <input type="radio" name="tabs" id="tab1" checked />
          <label class="lblIniSesion"
            for="tab1"
            role="tab"
            aria-selected="true"
            aria-controls="panel1"
            tabindex="0"
            >Iniciar Sesión</label
          >
          <div
            class="loginRight__bottom tab-content"
            id="tab-content1"
            role="tabpanel"
            aria-labelledby="description"
            aria-hidden="false"
          >
            <form action="" class="formLogin">
              <h3>Por favor ingrese su información personal</h3>
              <input class="txt" type="text" placeholder="Correo electrónico" />
              <input class="txt" type="text" placeholder="Contraseña" />
              <input class="txt txtHidden" type="text"/>
              <input class="txt txtHidden" type="text"/>
              <div class="bloquechekbox txtHidden">
                <input type="checkbox" />
                <label class="bloquechekbox__label">Acepto las Políticas de privacidad.</label
                >
              </div>
              <div>
                <input
                  class="btnIngresar"
                  type="button"
                  value="Ingresar"
                />
              </div>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
          </div>
        </div>
        <div class="registrarse">
          <input type="radio" name="tabs" id="tab2" />
          <label class="lblRegistrarse" for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Registrarse</label>
          <div class="loginRight__bottom tab-content" id="tab-content2" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
            <form action="" class="formLogin">
              <h3>Por favor ingrese su información personal</h3>
              <input class="txt" type="text" placeholder="Nombres y Apellidos"/>
              <input class="txt" type="text" placeholder="Correo electrónico" />
              <input class="txt" type="text" placeholder="Contraseña" />
              <input class="txt" type="text" placeholder="Repite contraseña" />
              <div class="bloquechekbox">
                <input type="checkbox" name="politicas" id="politicas" />
                <label class="bloquechekbox__label" for="politicas"
                  >Acepto las Políticas de privacidad.</label
                >
              </div>
              <div>
                <input
                  class="btnRegistrarse"
                  type="button"
                  value="Registrarse"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <br style="clear: both" />
    </div>
  </div>
</template>

<script>
import FraseTop from "@/components/FraseTop.vue";

export default {
  name: "Home",
  components: {
    FraseTop,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato");
.tabs {
  width: 650px;
  float: none;
  list-style: none;
  position: relative;
  text-align: left;
}
.tabs li {
  float: left;
  display: block;
}
.tabs input[type="radio"] {
  position: absolute;
  top: 0;
  left: -9999px;
}
.lblIniSesion, .lblRegistrarse {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 0;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}
.lblIniSesion:hover, .lblRegistrarse:hover {
  color: white
}
.tabs .tab-content {
  z-index: 2;
  display: none;
  overflow: hidden;

  font-size: 17px;
  line-height: 25px;
  padding: 20px;
  position: absolute;
  top: 74px;
  left: 0;
    width: -webkit-fill-available;
}
.tabs [id^="tab"]:checked + label {
  top: 0;
  background: #411AFF;
  color: white;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs [id^="tab"]:checked ~ [id^="tab-content"] {
  display: flex;
}

p.link {
  clear: both;
  margin: 380px 0 0 15px;
}
p.link a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #612e76;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
p.link a:hover {
  background-color: #5640ff;
}

/*------------------------------------ */

.login {
  background-image: url("../assets/fondoPagLogin.jpg");
  background-size: 100% 100%;
  height: 100vh;
  z-index: 3;
  display: flex;
}

.respaldoLogin {
  padding-bottom: 30px;
}

.loginLeft {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header__nav{
  display: flex;
  padding-top: 20px;
}

.frasetop {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.frasetop__title {
  text-align: end;
  font-size: 2em;
  font-weight: 600;
  color: white;
  width: 50%;
}

.frasetop__text {
  text-align: end;
  color: white;
  font-weight: 100;
  width: 20%;
}

.loginRight {
  background: white;
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.loginRight__top {
  display: flex;
  justify-content: space-evenly;
    box-shadow: 5px 0px 5px 0px grey;
    padding: 0;
}

.iniciarSesion {
  width: 50%;
  transition: 0.5s ease;  
}

.iniciarSesion:hover {
  box-shadow: inset 0px 112px 0px 5px #5640ff;
  color: white;
}

.registrarse {
  width: 50%;
  transition: 0.5s ease;  
}

.registrarse:hover {
  box-shadow: inset 0px 112px 0px 5px #5640ff;
  color: white;
}

.loginRight__bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.formLogin {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px;
  width: 100%;
}

.formLogin h3{
  text-align: center;
}


.iniciarSesion .formLogin a{
    display: flex;
    justify-content: center;
    margin-top: -20px;
}

::-webkit-input-placeholder {
  color: #c4c4c4;
}

.tab-content > .active {
  display: block;
}
.tab-content > .tab-pane {
  display: none;
}
.fade.show {
  opacity: 1;
}
.fade {
  opacity: 0;
  transition: opacity 0.15s linear;
}

.txt {
  height: 50px;
  padding: 10px;
  font-size: 1em;
}

.txtHidden{
  visibility: hidden;
}

.btnIngresar, .btnRegistrarse {
  width: 100%;
  padding: 25px;
  font-size: 1em;
  font-weight: bold;
  color: white;
  background: #5640ff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: .5s background ease;
}

.btnIngresar:hover, .btnRegistrarse:hover {
  background: #3e25fc;
}

@media (max-width: 1163px){
  .loginLeft{
    width: 60%;
  }
  .loginRight{
    width: 40%;
  }
  .frasetop__title{
    width: 70%;
  }
  .frasetop__text{
    width: 50%;
  }
}

@media (max-width: 873px){
  .loginLeft{
    width: 50%;
  }
  .loginRight{
    width: 50%;
  }
  .frasetop__title{
    width: 100%;    
    text-align: center;
  }
  .frasetop__text{
    width: 100%;
    text-align: center;
  }
  .header__nav{
    margin: 0 auto;
  }
  .respaldoLogin .container{
    margin: 0 auto;
  }
  .footerContent__img{
    justify-content: space-between;
  }
}

@media (max-width: 698px){
  .loginLeft{
    width: 0;
  }
  .loginRight{
    width: 100%;
  }
}

@media (max-width: 500px){
  .tabs .tab-content{
    top: auto; 
    padding: 0;
  }
  .formLogin {
    gap: 15px;
    padding: 20px;
  }
  .txt {
    height: 25px;
  }
  .iniciarSesion .formLogin a {
    margin-top: 0;
  }
  .btnIngresar, .btnRegistrarse {
    padding: 15px;
  }
  .lblIniSesion, .lblRegistrarse {
    font-size: 15px;
  }
  .bloquechekbox__label{
    font-size: 15px;
  }
}
</style>