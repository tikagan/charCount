
function charPosi (string) {
  counts = new Object
  let array = []
  for(i = 0; i < string.length; i++) {
    var char = string.charAt(i)
    var count = 0
    if (!/\s/.test(char)) {
      if (!counts[char]){
        //console.log("new " + char + " at " + + i)
        counts[char] = []
        counts[char].push(i)
        //console.log(counts)
      } else {
        //console.log("adding " + char + " at " + i)
        counts[char].push(i)
      }
    }
  }
    console.log(counts)
}


charPosi ("lighthouse in the house")
