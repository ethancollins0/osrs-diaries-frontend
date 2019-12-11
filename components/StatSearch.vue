<template>
    <div class='stat-search' v-bind:class="{removeMargin: loading}">
        <form @submit='handleSubmit' class='search-form'>
            <input class='fields' name='name' type="text" placeholder='Enter username...' required>
            <button class='fields'>Find User</button>
        </form>
        <img v-if="loading" alt='loading animation' src='@/assets/loading.gif' />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import calcCombat from './ExportFunctions/CalcCombat'

    export default {
        computed: {
            url(){
                return this.$store.state.BASE_URL
            }
        },
        methods: {
            handleSubmit(event){
                event.preventDefault()
                this.getStats(event.target.name.value)
            },
            getStats(name){
                this.loading = true
                fetch(this.url + '/stats', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name
                    })
                }).then(res => res.json())
                .then(result => {
                    this.loading = false
                    result 
                        ? this.setStats(result, name)
                        : alert('name not found, check spelling and try again')
                })
            },
            setStats(stats, name){
                this.$store.commit('setStats', stats)
                this.$store.commit('setName', name)
                let total = 0
                stats.map(stat => {
                    total += +stat.value
                })
                console.log('here', total)
                this.$store.commit('setTotal', total)
                this.updateCombatLevel(stats)
            },
            updateCombatLevel(stats){
                this.$store.commit('setCombat', calcCombat(stats))
            }
        },
        data(){
            return {
                loading: false
            }
        }
    }
</script>

<style lang="scss">
    .stat-search {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        margin-bottom: 3rem;

        img {
            height: 3rem;
            width: 3rem;
        }

        .search-form {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
            height: max-content;
            min-height: 3rem;
        }
        
        .fields {
            box-sizing: border-box;
            margin: .2rem;
            // padding:
            height: 3rem;
            outline: none;
            background: white;
            border: 1px solid black;
        }

        input {
            font-size: 12pt;
            color: black;
            width: 200px;
        }
    }

    .removeMargin {
        margin-bottom: 0;
    }
</style>