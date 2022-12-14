<script>
    export default{
        props:['item']
    }
</script>

<template>

   <!-- Creare la struttura della card -->
    <div class="card my_card">
        <img :src="item.image" alt="#">
        <h3>{{item.name}}</h3>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
.my_card{
    max-width: 300px;
}
</style>