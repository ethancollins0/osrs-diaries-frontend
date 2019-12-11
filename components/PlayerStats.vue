<template>
    <div class='player-stats-container'>
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
            }
        }
    }
</script>

<style lang="scss">
    .player-stats-container {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        height: max-content;
        min-height: 300px;
        margin-bottom: 3rem;

        .player-stats { 
            width: 50vw;
            height: max-content;
            min-height: 400px;
            max-width: 400px;
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
