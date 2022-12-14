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
    <section class="container mt-3">
        <div class="row">
            <div class="d-flex flex-wrap justify-content-center gap-3 col">

                <Card v-for="character in store.characterList" :key="character.id" :item="character"/>
                
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

</style>