<script>
  import {store} from './store';
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
    }
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
