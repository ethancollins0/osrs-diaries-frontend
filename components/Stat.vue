<template>
    <div class='stat' v-bind:class="{ total: total }" > 
        <img v-if="total == false" :src="this.getImage()" :alt="stat.name">
        <p v-if="total == false">{{stat.value}} / 99</p>
        
        <p v-if="total">Total Level</p>
        <p v-if="total">{{ stat.value }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            stat: Object
        },
        data(){
            return {
                total: false
            }
        },
        mounted(){
            if (this.stat.name == 'total'){ this.total = true }
        },
        methods: {
            getImage(){
                console.log(this.stat.name)
                if (this.stat.name != 'total'){
                    return require('../assets/' + this.stat.name + '.png')
                } else {
                    return require ('../assets/attack.png')
                }
            }
        }
    }
</script>

<style lang="scss">
    .stat {
        height: 40px;
        display: flex;
        width: 30%;
        justify-content: space-around;
        align-items: center;
        background: white;
        margin-top: .5rem;
        border-radius: 5px;
        border: 1px solid black;

        img {
            width: 20px;
            height: 20px;
        }

            color: black;
            font-weight: 800;
            font-size: 9pt;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .total {
        display: flex;
        flex-direction: column;
        justify-items: center;
        p {
            margin: 0;
        }
    }
</style>