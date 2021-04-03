<template>
  <div class="beneficios container">
    <div>
      <h3 class="beneficios__title">Beneficios</h3>
    </div>
    <section class="beneficios__section">
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconExpertos.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Aprende de Expertos</p>
          </div>
          <div>
            <p class="itemText">
              Aprende directamente de expertos del mercado a través del análisis
              y solución de problemas de programación. Utilizando los frameworks
              y herramientas de mayor relevancia dentro del mundo del coding.
            </p>
          </div>
        </div>
      </div>
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconClases.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Clases Virtuales</p>
          </div>
          <div>
            <p class="itemText">
              Aprovecha tu tiempo al máximo en nuestras clases virtuales y
              participa presencialmente de nuestras hackathones semanales para
              conocer y participar de la comunidad profesional que liderará la
              transformación tecnológica del Perú.
            </p>
          </div>
        </div>
      </div>
      <div class="beneficiosItems">
        <div class="beneficiosItems__img">
          <img src="../assets/iconEmpleos.svg" alt="" />
        </div>
        <div class="beneficiosItems__text">
          <div>
            <p class="itemTitle">Empleabilidad</p>
          </div>
          <div>
            <p class="itemText">
              Al finalizar el programa y certificarte a nombre de IDAT, podrás
              acceder a ofertas laborales especialmente identificadas para la
              comunidad PachaQTec, a través de nuestra plataforma de
              empleabilidad IDAT JOB.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.beneficios{
  margin: 150px 0;
}

.beneficios__title{
  color: black; 
  text-align: start
}

.beneficios__section{
  display: flex; 
  flex-direction: column; 
  gap: 20px
}

.beneficiosItems{
  display: flex; 
  background: #f8f8fa; 
  border-radius: 10px
}

.beneficiosItems__img{
  display: flex; 
  align-items: center; 
  padding: 50px
}

.beneficiosItems__text{
  padding: 40px 80px 40px 0;
  text-align: start;
  border-radius: 10px;
}

.itemTitle{
  color: black;
  font-weight: bold;
}

.itemText{
  color: black
}

@media (max-width: 1372px) {
  .beneficios{
    margin: 50px 0;
  }
}

@media(max-device-width: 500px){
  .beneficiosItems__text {
    display: flex;
    align-items: center;
    padding: 40px 0px 40px 0;
  }

  .itemText{
    display: none;
  }
}
</style>