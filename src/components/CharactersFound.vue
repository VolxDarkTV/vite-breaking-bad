<script>
import {store} from '../store';
export default{
        data(){
            return{
                store,
            }
        },
        methods:{
            resetSearch(){
                store.searchName = '';
                store.searchStatus = '';
                store.searchSpecies = '';
                store.searchGender = '';
                this.$emit('search');
            }
        }
    }
</script>

<template>
    <section class="container my_container d-flex">
        <div class="my_position d-flex align-items-center gap-3">
            <h5>
                Found <span>{{store.characterList.length}}</span> Characters
            </h5>
            <input type="text" v-model="store.searchName" placeholder="Search for Name">
            <!-- Status -->
            <select name="" id="">
                <option value="">-- secect status --</option>
                <option value="" @click.prevent="store.searchStatus = 'alive'">alive</option>
                <option value="" @click.prevent="store.searchStatus = 'dead'">dead</option>
                <option value="" @click.prevent="store.searchStatus = 'unknown'">unknown</option>
            </select>
            <!-- Gender -->
            <select name="" id="">
                <option value="">-- secect gender --</option>
                <option value="" @click.prevent="store.searchGender = 'male'">male</option>
                <option value="" @click.prevent="store.searchGender = 'female'">female</option>
                <option value="" @click.prevent="store.searchGender = 'genderless'">genderless</option>
                <option value="" @click.prevent="store.searchGender = 'unknown'">unknown</option>

            </select>
            <!-- Species -->
            <select name="" id="">
                <option value="">-- secect species --</option>
                <option value="" @click.prevent="store.searchSpecies = 'human'">Human</option>
                <option value="" @click.prevent="store.searchSpecies = 'alien'">alien</option>
            </select>
            <button class="btn btn-primary" @click.prevent="$emit('search')">
                Search
            </button>
            <button class="btn btn-warning" @click.prevent="resetSearch()">
                Reset
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    .my_container{
        min-width: 100%;
        height: 100px;
        background-color: #212529;
        & h5{
            color: #fff;
            & span{
                color: rgb(152, 89, 235);
            }
        }
    }
    .my_position {
        margin: 0 auto;
    }
</style>