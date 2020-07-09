<template>
    <div class="about d-flex align-items-center">
        <div class="container">


            <div class="row">
                <div class="col-md-12 about_image_container d-flex justify-content-center">
                    <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            class="about_image mt-2"
                            alt="My image"
                            width="200"
                    />
                </div>

                <div class="col-md-8  offset-md-2 about_description mt-2" >

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto at consequatur consequuntur culpa cum dolor dolore dolorem ea error eveniet excepturi, harum id illo impedit iure minus molestiae obcaecati odio odit, officia, quaerat quia quidem quis quos rem repudiandae sit tenetur ullam voluptatem. Ad aut beatae consequatur dolor, enim facilis id ipsum magni nemo perferendis possimus quae repellat repudiandae saepe, sequi tempora totam, velit voluptate. Aut cum deserunt dolores eos error exercitationem facilis ipsa, ipsam molestiae molestias, nobis odit provident qui rerum sunt totam vel? Architecto consectetur provident quasi ratione, sapiente temporibus unde veritatis? Adipisci beatae deserunt fugiat voluptate.</p>
                </div>

            </div>

<!--            <div class="row">-->
<!--                <div class="col-md-5 about_image_container">-->
<!--                    <img-->
<!--                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"-->
<!--                    class="about_image"-->
<!--                    alt="My image"-->
<!--                    width="400"-->
<!--                    />-->
<!--                    <h1>About Me</h1>-->
<!--                </div>-->
<!--                <div class="col-md-7 about_description">-->

<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus excepturi inventore maxime possimus repellendus repudiandae sint totam unde veritatis. At eaque itaque omnis totam? Earum et labore molestiae nobis voluptatem. Ducimus officiis quaerat repellendus voluptatem. Debitis error hic molestiae sequi. Amet blanditiis inventore ipsa magni quae, quaerat repellendus soluta.</p>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto at consequatur consequuntur culpa cum dolor dolore dolorem ea error eveniet excepturi, harum id illo impedit iure minus molestiae obcaecati odio odit, officia, quaerat quia quidem quis quos rem repudiandae sit tenetur ullam voluptatem. Ad aut beatae consequatur dolor, enim facilis id ipsum magni nemo perferendis possimus quae repellat repudiandae saepe, sequi tempora totam, velit voluptate. Aut cum deserunt dolores eos error exercitationem facilis ipsa, ipsam molestiae molestias, nobis odit provident qui rerum sunt totam vel? Architecto consectetur provident quasi ratione, sapiente temporibus unde veritatis? Adipisci beatae deserunt fugiat voluptate.</p>-->
<!--                </div>-->

<!--            </div>-->

        </div>

    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    /*h1 {*/
    /*    font-family: 'Libre Baskerville', serif;*/
    /*    text-transform: uppercase;*/
    /*    font-size: 50pt;*/
    /*    position: absolute;*/
    /*    top: -35px;*/
    /*    right:50px;*/
    /*    color: white;*/

    /*}*/

    .about {
        background-color: #d7c9d1;
        height: 100vh;
    }

    .about_image_container{
        /*position: relative;*/
    }

    .about_image{
        /*margin-left: -400px;*/
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    p{
        text-align: justify;
        margin-top: 20px;

    }

</style>
