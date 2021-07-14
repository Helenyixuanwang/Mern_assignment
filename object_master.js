// Lets use our new map and filter superpowers to get some data from this immutable pokémon array.

const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
   
    // const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    // console.log(bListPkmn)



//     Using the above pokémon array, find the following:
console.log("an array of pokémon objects where the id is evenly divisible by 3");
const pkmnIds = pokémon.filter( p => (p.id%6) === 0 );
console.log(pkmnIds);

console.log("an array of pokémon objects that are 'fire' type");
const fireTypes = pokémon.filter( p => p.types.includes("fire"));
console.log(fireTypes);

console.log("an array of pokémon objects that have more than one type");
const moreThanOneTypes = pokémon.filter( p => p.types.length > 1 );
console.log(moreThanOneTypes);

console.log("an array with just the names of the pokémon");
const nameTypes = pokémon.map( p => p.name);
console.log(nameTypes);

console.log("an array with just the names of pokémon with an id greater than 99");
const nameTypesId = pokémon.filter( p => p.id > 99).map ( p => p.id);
console.log(nameTypesId);

console.log(" an array with just the names of the pokémon whose only type is poison");
const poisonTypes = pokémon.filter( p => p.types.length===1 && p.types.includes("poison")).map( p => p.name)
console.log(poisonTypes)

console.log('an array containing just the first type of all the pokémon whose second type is "flying"');
const flyingTypes = pokémon.filter( p => p.types[1]==="flying" ).map( p => p.types[0]);
console.log(flyingTypes);

console.log('a count of the number of pokémon that are "normal" type');
const normalTypes = pokémon.filter( p => p.types.includes("normal"));
console.log(normalTypes)
console.log(normalTypes.length);

  





