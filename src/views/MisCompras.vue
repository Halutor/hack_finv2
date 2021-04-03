<template>
    <div>
        <Header />
        <div class="navbar">

        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style>
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

@media (max-device-width: 320px) {
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

  .header__nav {
    width: -webkit-fill-available;
  }
}
</style>