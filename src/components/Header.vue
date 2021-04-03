<template>
    <div class="header__nav container">
      <img src="../assets/logoPacha.svg" alt="" />


      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span style="font-size:20px;cursor:pointer" onclick="openNav()">&#9776;</span>

    </div>
    
</template>

<script>
export default {

 

};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

</script>

<style scoped>
.header__nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  z-index: 100;
  align-items: center;
  padding: 0;
}

.header__nav span{
  color: white;
}


.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

@media(max-device-width: 320px){
  .header__nav{
    width: -webkit-fill-available;
  }
}
</style>