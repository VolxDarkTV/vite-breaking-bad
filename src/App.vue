<script>
  import {store} from './store';
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import CharacterList from './components/CharacterList.vue';
  export default{
    components:{
      AppHeader,
      CharacterList,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      getCharacters(){
        axios
          .get(store.apiURL)
          .then(res => {
            store.characterList = res.data.results;
          })
          .catch(err => {
            console.log('errori', err);
          })

        }
    },
    mounted(){
      this.getCharacters();
    },
  }
</script>

<template>
    <AppHeader :msg="store.titolo"/>
    <main>
      <CharacterList/>
    </main>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
