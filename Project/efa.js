// Array structure for the creatures in each region
const northernRegion = [
    ["Lion", "Cat", ["speed", "power"]],
    ["Blaze", "Dragon", ["rebirth", "fire control"]]
];

const southernRegion = [
    ["hyena", "dog", ["sleek", "agility"]],
    ["T-rex", "Dinosaur", ["strong", "quick"]]
];

// the main array that holds all regions
const forest = [northernRegion, southernRegion];

// function
function searchCreatures(criteria) {
    const matchingCreatures = [];

    forest.forEach(region => {
        region.forEach(creature => {
            const [name, type, abilities] = creature;
            const matchesName = criteria.name && name === criteria.name;
            const matchesType = criteria.type && type === criteria.type;
            const matchesAbility = criteria.ability && abilities.includes(criteria.ability);

            if (matchesType || matchesAbility || matchesName) {
                matchingCreatures.push(creature);
            }
        });
    });
    return matchingCreatures;
}

console.log(searchCreatures({ability: "quick"}));
console.log(searchCreatures({type: "Dragon"}));
console.log(searchCreatures({name: "Lion"}));