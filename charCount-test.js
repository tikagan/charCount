function countLetters (string) {
  let letters = [/a/gi, /b/gi, /c/gi, /d/gi, /e/gi]
  var toCount = []
  let aVar = /a/gi
  for (i = 0; i < letters.length; i++) {
    while ((match = letters[i].exec(string)) != null) {
      toCount.push(match.index)
    }
  }
  console.log(toCount.length)
  console.log(toCount)
  //console.log("there are " + toCount.length + " instances of " + " in " + string)
}

countLetters("how many a's are there?")

