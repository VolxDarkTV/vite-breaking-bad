<script>
    import {store} from '../store';
    export default{
        props:{

        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>

   <!-- Creare la struttura della card -->
    <div class="card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="#">
        <h3>name</h3>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>