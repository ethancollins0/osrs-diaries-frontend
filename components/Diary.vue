<template>
    <div class='diary'>
        <div class='diary-title'>
            <h1>{{diary.name}}</h1>
        </div>
        <Requirements :requirements="diary.requirements"/>
    </div>
</template>

<script>
    import Requirements from './Requirements'

    export default {
        props: {
            diary: Object
        },
        components: {
            Requirements
        }
    }
</script>

<style lang="scss">
    .diary {
        height: max-content;
        background: #9e5829;
        width: 80%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        // align-items: center;
        // justify-content: space-between;
        // padding: .5rem;

        .diary-title {
            border-bottom: 1px solid black;
            display: flex;
            justify-content: center;
        }
    }
</style>