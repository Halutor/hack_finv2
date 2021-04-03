<template>
  <div class="frasetop container">
    <div>
      <p class="frasetop__title">
        ¡Explota todo tu potencial tecnológico!
      </p>
    </div>
    <div>
      <h3 class="frasetop__text">
        Con nuestros programas de especialización
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frasetop{
  margin-top: 200px;
  z-index: 60;
}

.frasetop__title{
  text-align: start; 
  font-size: 4em; 
  font-weight: 600;
  color: white;
}

.frasetop__text{
  text-align: start;
  color: white;
}

@media(max-width: 628px){
  .frasetop__title {
    font-size: 3rem;
  }
}

@media(max-device-width: 500px){
  .frasetop__title {
    font-size: 1.4rem;
  }
  .frasetop {
    margin-top: 100px;
  }
}

@media(max-device-width: 320px){
  .frasetop__title {
    font-size: 1.2rem;
    font-weight: 900;
  }
  .frasetop__text {
    font-weight: 100;
  }
  .frasetop {
    margin-top: 60px;
  }
}
</style>