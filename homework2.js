process.stdin.setEncoding('utf8');

const names = ["jaka", "michael", "jodi", "budi", "siti", "andi", "rudi"];

console.log(" Program Pencarian Nama ");
console.log("Daftar nama:", names);
console.log("\nMasukkan kata kunci pencarian:");

function isSubstring(str, sub){
  if(sub.length > str.length) return false;
  for(let i = 0; i < str.length - sub.length + 1; i++){
    if(str[i] !== sub[0]) continue;
    let exists = true;
    for(let j = 1; j < sub.length && exists; j++){
        if(str[i+j] === sub[j]) continue;
        exists = false;
    }
    if(exists) return true;
  }
  return false;
}

process.stdin.on('data', (input) => {
  const keyword = input.trim();

  let result = "";

  for (let i = 0; i < names.length; i++) {
    if (isSubstring(names[i], keyword)) {
      result = names[i];
      break;
    }
  }

    console.log("\nHasil ditemukan: " + result);
 
});