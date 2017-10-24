import character_json from "../data/characters.json";

export function createCharacter(id) {
    let char = character_json.find(c => c.id === id);
    return char;
}