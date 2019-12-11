export const state = () => ({
    BASE_URL: 'http://localhost:3001',
    diaries: [

    ],
    stats: [
        {name: 'attack', value: 1},
        {name: 'hitpoints', value: 10},
        {name: 'mining', value: 1},
        {name: 'strength', value: 1},
        {name: 'agility', value: 1},
        {name: 'smithing', value: 1},
        {name: 'defence', value: 1},
        {name: 'herblore', value: 1},
        {name: 'fishing', value: 1},
        {name: 'ranged', value: 1},
        {name: 'thieving', value: 1},
        {name: 'cooking', value: 1},
        {name: 'prayer', value: 1},
        {name: 'crafting', value: 1},
        {name: 'firemaking', value: 1},
        {name: 'magic', value: 1},
        {name: 'fletching', value: 1},
        {name: 'woodcutting', value: 1},
        {name: 'runecrafting', value: 1},
        {name: 'slayer', value: 1},
        {name: 'farming', value: 1},
        {name: 'construction', value: 1},
        {name: 'hunter', value: 1},
      ],
      total: {name: 'total', value: 36},
      combat: 3
})

export const mutations = {
    setStats(state, stats){
        state.stats = stats
      },
    setTotal(state, total){
        this.state.total.value = total
    },
    setCombat(state, combat){
        state.combat = combat
    },
    setDiaries(state, diaries){
        state.diaries = diaries
    }
}