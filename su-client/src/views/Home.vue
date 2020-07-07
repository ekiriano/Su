<template>
  <main class="homepage">
    <img src="../assets/homepage/Room_PC.jpg" width="100%" height="100%" alt="">

    <router-link to="/diary">
      <img src="../assets/homepage/Book.png" width="10%" alt="book" class="book">
    </router-link>

    <router-link to="/about">
      <img src="../assets/homepage/Sloth.png"  width="10%" alt="sloth" class="sloth">
    </router-link>

    <router-link to="/shop">
      <img src="../assets/homepage/Cactus.png" width="10%" alt="cactus" class="cactus">
    </router-link>

    <router-link to="/gallery">
      <img src="../assets/homepage/Frame.png" width="30%" alt="frame" class="frame">
    </router-link>

  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>


<style scoped>
  body, html {
    height: 100%;
    margin: 0;
  }

  .main {
    position: relative;
    height: 100vh !important;
    object-fit: contain;
    top: 50%;
    transform: translateY(-50%);

  }

  .book{
    position: absolute;
    bottom: 7%;
    left: 3%;
  }

  .sloth{
    position: absolute;
    bottom: 7%;
    left: 13%;
  }

  .cactus{
    position: absolute;
    bottom: 20%;
    right:4%;
  }
  .frame{
    position: absolute;
    left: 40%;
    top:0;
  }

  .book:hover, .sloth:hover , .cactus:hover, .frame:hover{
    animation: pulse 1s infinite;
    animation-timing-function: linear;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1);}
    100% { transform: scale(1); }
  }

</style>