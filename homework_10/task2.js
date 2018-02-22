/**
 * @typedef {Object} CombatHistory
 * @property {wins} number - Number of victories
 * @property {loses} number - Number of defeats
 */

/**
 * @typedef {Object} Stats
 * @property {string} name - The name of fighter
 * @property {number} attack - The amount of attack of fighter
 * @property {number} hp - The total number of health point of fighter
 */

/**
 * @typedef {Object} Fighter
 * @property {function} getName - Return name of the fighter
 * @property {function} fight - Return true if fighter make dmg to enemy, otherwise false
 * @property {function} block - Return true if enemy can block incoming damage, otherwise false (randomly)
 * @property {function} getStats - Retrurn {Stats} of fighter
 * @property {number} getCombatHistory - Return {CombatHistory} of previous fights
 */

/**
 * Pretty print fighter's info
 * @param {Fighter} fighter - The fighter
 * DO NOT MODIFY
 */
function showResult(fighter) {
  console.log('Fighter', fighter.getName());
  console.log('- Combat stats:', fighter.getCombatHistory());
  console.log('- Properties:', fighter.getStats());
}

/**
 * Your code goes here
 * function foo() { ... }
 */

function fighter(obj) {
  obj.history = {
    wins: 0,
    loses: 0
  };
  obj.getName = function()  {
    return this.name;
  }

  obj.getStats = function() {
    return {name: this.name, attack: this.attack, hp: this.hp };
  }
  
  obj.fight = function(fighter) {
    if(fighter.hp <= 0 || this.hp <= 0) {
      console.log('combat can not be');
    } else {
      if(!fighter.block()) {
        if(this.attack >= fighter.hp) {
          console.log('true, ' + this.name + ' win ' + fighter.name);
          this.history.wins++;
          fighter.history.loses++;
          fighter.hp = 0;
        } else {
          console.log('true, ' + this.name + ' make damage to ' + fighter.name);
          fighter.hp -= this.attack;
        }
      } else {
        console.log('false');
      }
    }
  }
  
  obj.block = function() {
    return Math.random() >= 0.5;
  }
  
  obj.getCombatHistory = function() {
    return this.history;
  }
  return obj;
}


/**
 * The following code must be valid after implementation!
 */ 

var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3
fighter1.fight(fighter3);

/**
 * Fighter John
 * - Combat stats: { wins: 1, loses: 0 }
 * - Properties: { name: 'John', attack: 100, hp: 100 }
 */
showResult(fighter1);

/** Fighter Kayn
 * - Combat stats: { wins: 0, loses: 0 }
 * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
 */
showResult(fighter2); 

/**
 * Fighter Bill
 * - Combat stats: { wins: 0, loses: 1 }
 * - Properties: { name: 'Bill', attack: 40, hp: 0 }
 */
showResult(fighter3);
