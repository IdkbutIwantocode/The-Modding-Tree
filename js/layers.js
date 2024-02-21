addLayer("p", {
    name: "Ruxice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Ruxice robuxs", // Name of prestige currency
    baseResource: "robux", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},    upgrades: {
        11: {
            title: "more!",
            description: "Double your robux gain.",
            cost: new Decimal(1),
        },

        12: {
            title: " even more!",
            description: "triple your double robux gain.",
            cost: new Decimal(5),
        },

        13: {
            title: " MOREE1!11!",
            description: "DOUBLE your TRIPLE robux gain.",
            cost: new Decimal(10),
        },

    
            14: {
                description: "Double double double",
                cost: new Decimal(50),
                etc
            },

        
        

    }

})

