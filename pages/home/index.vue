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
            width: 60vw;
            max-width: 700px;
            min-width: 400px;
            height: 100%;
            min-height: 100vh;
            background: url('https://runescape.com/img/rsp777/bg2.jpg');
            background-size: 100% 50%;
            background-repeat: repeat-y;
            margin: 0;
            padding: 0;
        }
    }
</style>