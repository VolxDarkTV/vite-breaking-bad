<script>
import {store} from '../store';
export default{
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="container my_container d-flex">
        <div class="d-flex justify-content-start align-items-center">
            <h5>
                Found <span>{{store.characterList.length}}</span> Characters
            </h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    .my_container{
        width: 80%;
        height: 100px;
        background-color: #212529;
        & h5{
            color: #fff;
            & span{
                color: rgb(152, 89, 235);
            }
        }
    }
</style>