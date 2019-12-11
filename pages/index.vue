<template>
  <div id="index">
    <div class='background'>
      <StatSearch />
      <PlayerStats />
      <DiaryContainer />
    </div>
  </div>
</template>

<script>
import StatSearch from '@/components/StatSearch'
import PlayerStats from '@/components/PlayerStats'
import DiaryContainer from '@/components/DiaryContainer'

export default {
  components: {
    StatSearch,
    PlayerStats,
    DiaryContainer
  },
  mounted(){
    this.getDiaries()
  },
  methods: {
    getDiaries(){
      fetch(this.$store.state.BASE_URL + '/diaries')
        .then(res => res.json())
        .then(diaries => {
          diaries
            ? this.$store.commit('setDiaries', diaries)
            : alert('failed to fetch requirements, please try again later')
        })
    }
  }
}
</script>

<style lang='scss'>
  #index {
    display: flex;
    justify-content: center;
    background: black;

    .background {
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 60vw;
      max-width: 700px;
      min-width: 320px;
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
