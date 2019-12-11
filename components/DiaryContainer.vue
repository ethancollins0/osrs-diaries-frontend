<template>
    <div class='diary-container'>
        <Diary v-for="(diary, index) in this.diaries" :key="index" :diary="diary" />
    </div>
</template>

<script>
    import Diary from './Diary'

    export default {
        computed: {
            diaries(){
                return this.$store.state.diaries
            }
        },
        components: {
            Diary
        }
    }
</script>

<style lang="scss">
    .diary-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>