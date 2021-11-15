// import the Potion() constructor
const Potion = require("../lib/Potion");
const Character = require("./Character");

class Player extends Character {
    constructor(name = '') {
        // call parent constructor and passes name
        super(name);

        this.inventory = [new Potion("health"), new Potion()];
    }

    //returns an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    addPotion(potion) {
        this.inventory.push(potion);
    };

    usePotion(index) {
        // original array has a single potion removed at the specified index value and put into a new "removed items" array
        // then the potion at index [0] os this "removed items" array is saved in a potion variable
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case "agility":
                this.agility += potion.value;
                break;
            case "health":
                this.health += potion.value;
                break;
            case "strength":
                this.strength += potion.value;
                break;
        }
    };
};



module.exports = Player;