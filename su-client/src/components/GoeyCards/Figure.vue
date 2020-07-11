<template>
    <p>figure</p>
</template>

<script>

    import * as THREE from 'three'

    export default {
        name: "Figure",
        props : {
            scene : {
                required : true,
                type : Object
            }
        },
        data : function (){
            return {
                // scene: this.props.scene,
                figureScene : null,
                $image : null ,
                image : null,
                loader : null ,
                hoverImage : null ,
                sizes : null ,
                offset : null ,
            }
        },
        methods : {
            getSizes() {
                const { width, height, top, left } = this.$image.getBoundingClientRect()

                this.sizes.set(width, height)
                this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2)
            },
            createMesh() {
                this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)
                this.material = new THREE.MeshBasicMaterial({
                    map: this.image
                })

                this.mesh = new THREE.Mesh(this.geometry, this.material)

                this.mesh.position.set(this.offset.x, this.offset.y, 0)
                this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

                this.figureScene.add(this.mesh)
            }
        },
        created() {
            this.$image = document.querySelector('.tile__image')
            this.figureScene = this.props.scene

            this.loader = new THREE.TextureLoader()

            this.image = this.loader.load(this.$image.dataset.src)
            this.hoverImage = this.loader.load(this.$image.dataset.hover)
            this.sizes = new THREE.Vector2(0, 0)
            this.offset = new THREE.Vector2(0, 0)
            this.getSizes()
            this.createMesh()
        }

    }
</script>

<style scoped>

</style>