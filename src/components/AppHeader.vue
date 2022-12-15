<script>
    export default{
        props:['msg']
    }
</script>

<template>

    <header class="container">
        <!-- <h1 class="my-5">{{msg}}</h1> -->
        <div class="img_container">
            <img src="../../public/img/Rick-And-Morty-Logo.png" alt="">
        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
    .img_container{
        margin: 0 auto;
        width: 500px;
    }
</style>