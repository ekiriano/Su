<template>
  <div>
      <section class="container">
          <article class="tile">
              <figure class="tile__figure">
                  <img
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                          data-hover="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                          class="tile__image"
                          alt="My image"
                          width="400"
                  />
              </figure>
          </article>
      </section>

      <canvas ref="stage" id="stage"></canvas>

      <Figure :scene="this.scene" />
  </div>
</template>

<script>
    import Figure from "./Figure";
    import * as THREE from 'three'
    const perspective = 800;
    export default {
        name: "Scene",
        components : {Figure},
        data: function () {
            return {
                container : null ,
                scene : null ,
                renderer : null ,

            }
        },
        methods : {
            initLights(){
                const ambientlight = new THREE.AmbientLight(0xffffff, 2)
                this.scene.add(ambientlight)
            },
            initCamera() {
                const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

                this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000)
                this.camera.position.set(0, 0, perspective)
            },
            update() {
                requestAnimationFrame(this.update.bind(this))

                this.renderer.render(this.scene, this.camera)
            }
        },
        created() {
            this.container = this.$refs.stage
            this.scene = new THREE.Scene()
            this.renderer = new THREE.WebGLRenderer({
                canvas: this.container,
                alpha: true,
            })
            this.renderer.setSize(window.innerWidth, window.innerHeight)
            this.renderer.setPixelRatio(window.devicePixelRatio)

            this.initLights()
            this.initCamera()
            this.update()

        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        z-index: 10;
    }

    .tile {
        width: 35vw;
        flex: 0 0 auto;
    }

    .tile__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    canvas {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 9;
    }
</style>