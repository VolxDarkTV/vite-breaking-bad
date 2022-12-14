<script>
    import {store} from '../store';
    import Card from './Card.vue';
    export default{
        components:{
            Card,
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="container">

        <Card/>
        
    </section>
</template>

<style lang="scss" scoped>


</style>