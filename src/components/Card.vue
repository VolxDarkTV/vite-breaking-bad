<script>
    export default{
        props:['item'],
    }
</script>

<template>

   <!-- Creare la struttura della card -->
    <div class="card my_card">
        <span class="my_position_status">
            <font-awesome-icon icon="fa-solid fa-recycle" />
            {{item.status}}
        </span>
        <span class="my_position_origin">
            {{item.origin.name}}
        </span>
        <img class="card" :src="item.image" alt="#">
        <div>
            <ul>
                <li>
                    <span>Name:</span>
                    {{item.name}}
                </li>
                <li>
                    <span>Species:</span>
                    {{item.species}}
                </li>
                <li>
                    <span>Gender:</span>
                    {{item.gender}}
                </li>
            </ul>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
.my_card{
    position: relative;
    max-width: 300px;
    & .fa-recycle{
        color: green;
    }
}
.my_position_status{
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    right: 0;
    background-color: aliceblue;
    padding: 5px;
    border: solid rgba(255, 0, 0, 0.6) 2px;
    box-shadow: 0px 0px 10px red;
}
.my_position_origin{
    z-index: 1;
    position: absolute;
    top: 250px;
    transform: translate(-50%, -50%);
    left: 50%;
    font-weight: bold;
    color: rgb(239, 233, 32);
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
ul li{
    display: flex;
    justify-content: flex-start;
    gap: 5px;
}
</style>