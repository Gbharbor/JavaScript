let character = {
    name: "Bia",lastname: "damelio",
    fullname: function () {return `${this.name} ${this.lastname}`;},
    age: [90,100],
    allages: () => {return character.age.length;},
    eyes: [{size: "big", color: "black"},
           {size: "small", color: "blue"}],
    features: {strength:[10,20,30],}
}
console.log(character.allages());
console.log(character.fullname());
character.features.strength.push(40);
character.features.strength[3] +=5;
console.log(`name: ${character.name} age:${character.age}`);
console.log(`strength:${character.features.strength[3]}`);
console.log(`eyes type:${character.eyes[1].color}`);