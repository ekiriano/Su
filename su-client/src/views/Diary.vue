<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 d-flex justify-content-center">
                    <img src="../assets/homepage/Book.png" width="10%" alt="">
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row masonry-grid">
                <div class="col-md-12 col-lg-4 col-sm-12 masonry-column p-0 m-0">
                    <div class="post">
                        <div class="post-overlay" >
                            <h2 class="mb-4 mt-4">rrr</h2>
                            <p class="ml-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque libero numquam pariatur qui quia, quibusdam totam voluptatem? Deserunt, explicabo perspiciatis.</p>
                            <router-link  to="#" class="learn-more ml-4 mt-2"> Learn More ...</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4 col-sm-12 masonry-column p-0 m-0">
                    <div class="post">
                        <div class="post-overlay" >
                            <h2 class="mb-4 mt-4">rrr</h2>
                            <p class="ml-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque libero numquam pariatur qui quia, quibusdam totam voluptatem? Deserunt, explicabo perspiciatis.</p>
                            <router-link  to="#" class="learn-more ml-4 mt-2"> Learn More ...</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4 col-sm-12 masonry-column p-0 m-0">
                    <div class="post">
                        <div class="post-overlay" >
                            <h2 class="mb-4 mt-4">rrr</h2>
                            <p class="ml-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque libero numquam pariatur qui quia, quibusdam totam voluptatem? Deserunt, explicabo perspiciatis.</p>
                            <router-link  to="#" class="learn-more ml-4 mt-2"> Learn More ...</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Diary",
        data: function () {
            return{
                posts:{
                    post_1:{
                        id: 1,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequatur corporis dignissimos ea eaque eos facilis illo laudantium magnam minima non, officiis qui, quo quos sed tenetur ullam vero.\n"
                    },
                    post_2:{
                        id: 2,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequatur corporis dignissimos ea eaque eos facilis illo laudantium magnam minima non, officiis qui, quo quos sed tenetur ullam vero.\n"
                    },
                    post_3:{
                        id: 3,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequatur corporis dignissimos ea eaque eos facilis illo laudantium magnam minima non, officiis qui, quo quos sed tenetur ullam vero.\n"
                    },
                    post_4:{
                        id: 4,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequatur corporis dignissimos ea eaque eos facilis illo laudantium magnam minima non, officiis qui, quo quos sed tenetur ullam vero.\n"
                    },
                }
            }
        }
    }
</script>

<style scoped>

    *{
        /*font-family: 'Josefin Sans', sans-serif;*/
        color: black;
        text-align: justify;
        box-sizing: border-box;
    }

    .masonry-column {
        padding: 0 1px;
    }

    .masonry-grid > div  {
        margin: 5px 1px;
    }


</style>