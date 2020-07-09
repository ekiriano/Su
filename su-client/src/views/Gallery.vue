<template>
    <main class="gallery">
        <Scene/>
    </main>
</template>

<script>
    import Scene from "../components/GoeyCards/Scene";
    export default {
        name: "Gallery",
        components : {Scene}
    }
</script>

<style scoped>
    .gallery {
        background-color: #d7c9d1;
        height: 100vh;
    }
</style>