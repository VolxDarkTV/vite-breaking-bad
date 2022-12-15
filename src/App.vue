<script>
  import {store} from './store';
  import axios from 'axios';
  import Loader from './components/Loader.vue';
  import AppHeader from './components/AppHeader.vue';
  import CharacterList from './components/CharacterList.vue';
  import CharactersFound from './components/CharactersFound.vue';
  export default{
    components:{
      Loader,
      AppHeader,
      CharacterList,
      CharactersFound,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      getCharacters(){
        let myUrl = store.apiURL;

        if(store.searchName || store.searchStatus || store.searchSpecies || store.searchGender !== ''){
          myUrl += `?${store.apiNameParameter}=${store.searchName}&${store.apiStatusParameter}=${store.searchStatus}&${store.apiSpeciesParameter}=${store.searchSpecies}&${store.apiGenderParameter}=${store.searchGender}`
        }

        axios
          .get(myUrl)
          .then(res => {
            store.characterList = res.data.results;
          })
          .catch(err => {
            console.log('errori', err);
          })

      },
    },
    mounted(){
      this.getCharacters();
    },
  }
</script>

<template>
  <Loader/>
  <AppHeader :msg="store.titolo"/>
  <main>
    <CharactersFound @search="getCharacters"/>
    <CharacterList/>
  </main>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
