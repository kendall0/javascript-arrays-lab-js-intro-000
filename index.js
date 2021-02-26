var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  kittens.slice(1);
}
