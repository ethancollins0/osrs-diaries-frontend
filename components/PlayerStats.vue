<template>
    <div class='player-stats-container'>
        <div class='player-stats-title'>
            <h2>{{username}}</h2>
            <h3>LVL {{combat}}</h3>
        </div>  
        <div class='player-stats'>
            <Stat v-for="(stat, index) in stats" v-bind:key="index" :stat="stat" />
            <Stat :stat="total" />
        </div>
    </div>
</template>

<script>
    import Stat from './Stat'

    export default {
        components: {
            Stat,
        },
        computed: {
            stats(){
                return this.$store.state.stats
            },
            total(){
                return this.$store.state.total
            },
            combat(){
                return this.$store.state.combat
            },
            username(){
                return this.$store.state.username
            }
        }
    }
</script>

<style lang="scss">
    .player-stats-container {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        min-height: 300px;
        margin-bottom: 3rem;

        .player-stats-title {
            background: #fff;
            height: 2rem;
            width: 50vw;
            max-width: 400px;
            padding: .5rem;
            border: 2px solid black;
            border-bottom: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }

        .player-stats { 
            width: 50vw;
            max-width: 400px;
            height: max-content;
            min-height: 400px;
            border: 2px solid black;
            background: rgb(97, 53, 23);
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding: .5rem;
        }
    }
</style>
