<template>
  <main class="homepage" id="homepage">
    <img src="../assets/homepage/Room_PC.png" width="100%" height="100%" alt="">

    <router-link to="/diary">
      <img src="../assets/homepage/Book.png" width="8%" alt="book" class="book">
    </router-link>

    <router-link to="/about">
      <img src="../assets/homepage/Sloth.png"  width="10.7%" alt="sloth" class="sloth">
    </router-link>

    <router-link to="/shop">
      <img src="../assets/homepage/Cactus.png" width="8%" alt="cactus" class="cactus">
    </router-link>
    
    <router-link to="/message">
      <img src="../assets/homepage/Contact.png" width="4%" alt="contact" class="contact">
    </router-link>
    
    <router-link to="/gallery">
      <img src="../assets/homepage/Frame.png" width="36%" alt="frame" class="frame">
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
  main#homepage{
    height: 100vh;
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
    bottom: 11%;
    left: 5.6%;
  }

  .sloth{
    position: absolute;
    bottom: 6.7%;
    left: 14.2%;
  }

  .cactus{
    position: absolute;
    bottom: 20.5%;
    right:9%;
  }
  .frame{
    position: absolute;
    left: 40.4%;
    top:-3.7%;
  }

  .contact{
    position: absolute;
    bottom: 36%;
    left: 37.5%;
  }

  .book:hover, .sloth:hover , .cactus:hover, .frame:hover, .contact:hover{
    animation: pulse 1s infinite;
    animation-timing-function: linear;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1);}
    100% { transform: scale(1); }
  }

</style>