<template>
    <div class='requirements'>
        <section>
            <p>Easy</p>
            <div class='diary-status' :class="{canDo: this.canComplete('easy', this.stats)}"  ></div>
        </section>
        <section>
            <p>Medium</p>
            <div class='diary-status' :class="{canDo: this.canComplete('medium', this.stats)}" ></div>
        </section>
        <section>
            <p>Hard</p>
            <div class='diary-status' :class="{canDo: this.canComplete('hard', this.stats)}" ></div>
        </section>
        <section>
            <p>Elite</p>
            <div class='diary-status' :class="{canDo: this.canComplete('elite', this.stats)}" ></div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            requirements: Object,
        },
        computed: {
            stats(){
                return this.$store.state.stats
            }
        },
        methods: {
            canComplete(difficulty, stats){
                let bool = true
                let skills = Object.keys(this.requirements[difficulty].skills)
                skills.map(skill => {
                    let stat = this.stats.find(stat => {
                        return stat.name == skill
                    })
                    if (stat){
                        if (stat.value < this.requirements[difficulty].skills[skill]){
                            bool = false
                        }
                    }
                })
                console.log(bool)
                return bool
            }
        }
    }
</script>

<style lang="scss">
    .requirements {
        display: flex;
        flex-direction: row;
        // padding-bottom: 1rem;

        section {
            width: 25%;
            display: flex;
            flex-direction: column;
            
            p {
                width: 100%;
                background: tan;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                display: flex;
                justify-content: center;
                transition: .3s all;
            }

            p:hover {
                cursor: pointer;
                background: rgb(200, 155, 96);
            }

            .diary-status {
                background: red;
                height: 1rem;
                width: 100%;
                border-right: 1px solid black;
            }

            .canDo {
                background: green;
            }
        }

        section:last-of-type {
            p {
                border-right: 0px;
            }

            .diary-status {
                border-right: 0px;
            }
        }
        
    }
</style>