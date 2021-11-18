// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const allCats = [...cats, "Broom"];
    return allCats;
}

function prependCat(name) {
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat() {
    const newCatArray = cats.slice(0, -1);
    return newCatArray;
}

function removeFirstCat() {
    const newCatArray = cats.slice(1);
    return newCatArray;
}