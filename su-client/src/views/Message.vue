<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8 offset-md-2 mt-5 ">
                <h1 class="mt-5 mb-5">Contact Me !</h1>
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name"> Name :</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email"> Email:</label>
                                <input type="email" class="form-control" id="email" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="subject">Subject:</label>
                                <input type="text" class="form-control" id="subject" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="message">Message :</label>
                                <textarea class="form-control" id="message" rows="7"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button class="submit-form-button"> Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>
    *{
        text-align: justify;
        font-family: 'Libre Baskerville', serif;
    }

    h1 {
        font-family: 'Libre Baskerville', serif;
        text-transform: uppercase;
        font-size: 40pt;
    }
    input:focus , textarea:focus{
        outline: 3px solid #eedee1;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
    }

</style>