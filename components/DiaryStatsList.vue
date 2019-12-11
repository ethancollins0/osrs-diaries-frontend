<template>
    
</template>

<script>
    import calc from './ExportFunctions/CalcCombat'

    export default {
        props: {
            requirements: Object,
        },
        computed: {
            stats(){
                return this.$store.state.stats
            }
        },

    }
</script>

<style lang="scss">

</style>