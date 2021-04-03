<template>
  <div>
    <Header />
    <img class="fondoPagHome" src="../assets/fondoPagHome.jpeg" alt="">
    <div class="navbar">
    </div>
    <div class="escuela">
      <main class="main">
        <FraseTop />
        <div class="respaldo container">
          <h5 class="respaldo__title">Con el respaldo de:</h5>
          <div class="respaldo__img">
            <img src="../assets/intercorp.svg" alt="" />
            <img src="../assets/idat.svg" alt="" />
            <img src="../assets/zegel.svg" alt="" />
          </div>
        </div>
        <Programas />
        <div class="bloqueInformativo">
          <div class="bloqueInformativo__content">
            <img class="imgGirl" src="../assets/estudiante.svg" alt=""/>
            <div class="textInformativo">
              <p class="textInformativo__title">
                Sé parte de la comunidad
              </p>
              <p>
                Programas semi-presenciales para el desarrollo de habilidades de
                programación a lo largo de todo el Stack tecnológico.
                <br />
                <br />
                Al finalizar sabrás cómo crear una página web y desarrollar la
                lógica detrás del funcionamiento de una aplicación, así como
                formar parte de una gran comunidad de desarrolladores.
              </p>
            </div>
          </div>
        </div>
        <Beneficios />

      </main>
      <FormCelular />
    </div>
    <footer class="footer">
      <div class="footer__background">
        <div class="footerContent container">
          <h5 class="footerContent__title">
            Con el respaldo de:
          </h5>
          <div class="footerContent__img">
            <img src="../assets/intercorpWhite.svg" alt="" />
            <img src="../assets/idatWhite.svg" alt="" />
            <img src="../assets/zegelWhite.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import FraseTop from "@/components/FraseTop.vue";
import Programas from "@/components/Programas.vue";
import Beneficios from "@/components/Beneficios.vue";
import FormCelular from "@/components/FormCelular.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
    FraseTop,
    Programas,
    Beneficios,
    FormCelular,
  },
};
</script>

<style>
:focus { 
    outline-color: transparent; 
    outline-style: none;
}

h3 {
  color: black;
}

h5 {
  color: black;
}

.fondoPagHome{
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 40;
  object-fit: cover;
}

.escuela{
  display: flex; 
  justify-content: space-between
}

.container {
  max-width: 90%;
  margin-right: 100px;
  margin-left: 100px;
}

.main{
  display: flex; 
  flex-direction: column; 
  width: 60%;
}

.respaldo{
  margin-top: 220px;
}

.respaldo__title{
  text-align: start
}

.respaldo__img{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
}

.bloqueInformativo{
  height: 282px;
  margin-top: 150px;
}

.bloqueInformativo__content{
  width: calc(100vw - 17px);
  background-color: blue;
  display: flex;
  height: 100%;
}

.imgGirl{
  height: max-content;
  position: relative;
  top: -100px;
  left: -100px;
}

.textInformativo{
  display: flex;
  flex-direction: column;
  text-align: start;
  color: white;
  justify-content: center;
  padding: 0 40% 0 0;
}

.textInformativo__title{
  font-size: 25px; 
  font-weight: 800
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 20;
  background: black;
  height: 61px;
}
.navbar.sticky {
  background: #1b1b1b;
  /* padding: 10px 0; */
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
}

.footer{
  position: relative;
  height: 144px;
}

.footer__background{
  position: absolute; 
  width: 100%; 
  background: rgb(0, 4, 37)
}

.footerContent{
  padding: 20px 0;
}

.footerContent__title{
  text-align: start; 
  color: white
}

.footerContent__img{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
}

@media (max-width: 1372px) {
  .escuela {
    flex-direction: column;
  }
  .main {
    width: 100%;
  }
  .textInformativo{
    margin-right: 0;
    padding: 0 50px 0 0;
  }
  .frasetop__title {
    font-size: 3em;
  }
  .respaldo {
    margin-top: 120px;
  }
}
@media(max-width: 831px){
  .groupImages{
    flex-direction: column;
  }

  .bloqueInformativo {
    margin-top: 100px;
    height: 100%;
  }

  .bloqueInformativo__content {
    width: calc(100vw - 17px);
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imgGirl{
    top: -100px;
    left: 0;
  }
  .textInformativo {
    padding: 0 50px 0;
    margin-top: -100px;
  }
}

@media(max-width: 628px){
  .container {
    max-width: 100%;
    margin-right: 20px;
    margin-left: 20px;
    padding-top: 0;
  }
}

@media(max-device-width: 500px){
  .respaldo{
    margin-top: 70px;
  }
  .footer{
    margin-top: 100px;
  }

  .navbar{
    width: 100%;
  }
  .bloqueInformativo__content {
    width: 100vw;
  } 
  .fondoPagHome{
    content: url('../assets/fondoPagHomeMovil.png');
  }
}

@media (max-device-width: 320px){
  .respaldo{
    margin-top: 0;
  }
  .imgGirl {
      width: -webkit-fill-available;
  }
  .footer__background{
    bottom: 0;
  }
}

</style>
