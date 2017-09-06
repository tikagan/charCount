function countLetters (string) {
  const regExLet = [/a/gi, /b/gi, /c/gi, /d/gi, /e/gi, /f/gi, /g/gi, /h/gi, /i/gi, /j/gi, /k/gi, /l/gi, /m/gi, /n/gi, /o/gi, /p/gi, /q/gi, /r/gi, /s/gi, /t/gi, /u/gi, /v/gi, /w/gi, /x/gi, /y/gi, /z/gi]
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  countObj = {
  }
  //var toCount = []
  let aVar = /a/gi
  for (i = 0; i < regExLet.length; i++) {
    var char = letters[i];
    // var match = regExLet[i].exec(string)
    let count = 0;
    while (regExLet[i].exec(string) != null) {
      count++;
    }

    if (count !== 0) {
      countObj[char] = count;
    }
  }
  console.log(countObj)
  //console.log("there are " + toCount.length + " instances of " + " in " + string)
}

countLetters("the quick fox jumped over the lazy brown dog")

