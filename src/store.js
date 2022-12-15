import {reactive} from 'vue'
export const store = reactive ({
    characterList:[],
    apiURL:'https://rickandmortyapi.com/api/character',
    titolo:'Rick & Morty',
    searchName: '',
    searchStatus: '',
    apiNameParameter: "name",
    apiStatusParameter: "status",
});