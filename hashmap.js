// STEP ONE: initialize an array of a fixed 
// size with "buckets" or slots filled with null values

let data = [null, null, null, null]

//  STEP TWO: use a hash function that converts keys into integers
// this one is the simpleHash

function hash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

// STEP THREE: make a function that converts the key into a valid array index
const hashMod = (key) => {
  return hash(key) % data.length;
}






// INSERT into a hash table

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}