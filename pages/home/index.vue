<template>
    <div id="home">
        <div class='background'>

        </div>
    </div>
</template>
 
<script>
export default {
    
}
</script>

<style lang="scss">
    #home {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #000;

          .background {
            display: flex;
            justify-content: center;
            height: 320px;
            min-height: 100vh;
            background: url('https://runescape.com/img/rsp777/bg2.jpg');
            background-size: 100% 320px;
            width: 40vw;
            max-width: 700px;
            min-width: 400px;
            background-repeat: repeat-y;
            margin: 0;
            padding: 0;
        }
    }
</style>