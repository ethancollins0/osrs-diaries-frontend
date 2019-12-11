export default function calcCombat(stats){
    let combatStats = {}
    let combatNames = [
        'attack',
        'defence',
        'strength',
        'hitpoints',
        'ranged',
        'magic',
        'prayer'
    ]

    stats.map(stat => {
        combatNames.map(name => {
            if (stat.name == name){
                combatStats[stat.name] = +stat.value
            }
        })
    })

    let {
        attack,
        defence,
        strength,
        prayer,
        magic,
        ranged,
        hitpoints
    } = combatStats

    const base = 0.25 * (defence + hitpoints + Math.floor(prayer/2))
    const melee = 0.325 * (attack + strength)
    const range = 0.325 * (Math.floor(3 * ranged / 2))
    const mage = 0.325 * (Math.floor(3 * magic / 2))
    let highest = Math.max(melee, range, mage)
    return Math.floor(base + highest)
}
