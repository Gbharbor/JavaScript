let character = {
    name: "Bia",
    lastname: "Damelio",
    fullname: function() {
        return `${this.name} ${this.lastname}`;
    },
    ages: [90, 100],
    allages: function() {
        return this.ages.length;
    },
    eyes: [
        {size: "big", color: "blue"},
        {size: "small", color: "green"}
    ],
    features: {
        strength: [10, 20, 30]
    }
};

console.log("Nome completo:", character.fullname());
console.log("Número de idades:", character.allages());
console.log(`Nome: ${character.name}, Idades: ${character.ages}`);
console.log("Primeira idade:", character.ages[0]);
console.log("Tamanho dos olhos:", character.eyes[1].size);

// Adicionando novos valores ao array "strength"
character.features.strength.push(50);
character.features.strength.push(60);
character.features.strength[4] += 5;

console.log("Valor adicionado ao strength:", character.features.strength[3]);
console.log("Valor adicionado e modificado:", character.features.strength[4]);