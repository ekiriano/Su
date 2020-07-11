<template>
    <div>

        <div class="container mt-5">
            <div class="row masonry-grid">
                <div class="col-md-12 col-lg-3 col-sm-12 masonry-column p-2 m-0">
                   <DiaryCategory/>
                   <DiaryCategory/>
                   <DiaryCategory/>
                </div>
                <div class="col-md-12 col-lg-3 col-sm-12 masonry-column p-2 m-0">
                    <DiaryCategory/>
                    <DiaryCategory/>
                    <DiaryCategory/>
                </div>
                <div class="col-md-12 col-lg-3 col-sm-12 masonry-column p-2 m-0">
                    <DiaryCategory/>
                    <DiaryCategory/>
                    <DiaryCategory/>
                </div>
                <div class="col-md-12 col-lg-3 col-sm-12 masonry-column p-2 m-0">
                    <DiaryCategory/>
                    <DiaryCategory/>
                    <DiaryCategory/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import DiaryCategory from "../components/Diary/DiaryCategory";

    export default {
        name: "Diary",
        components:{DiaryCategory},
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
    .post1{
        height:400px;
    }
    .post2{
        height:600px;
    }


</style>