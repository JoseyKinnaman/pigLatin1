// business logic
function pigLatin(userInput) {
  var words = userInput.split(" ");
  // console.log(words);
  var newArr = []

  for (i = 0; i < words.length; i++) {
    var word = words[i].split("");
    // console.log(word);
  }
  if (word[0] === "a" || word[0] === "i" || word[0] === "o" || word[0] === "e" || word[0] === "u") {
    newArr.push(word.join("") + "way ")
    console.log(newArr);
  } else {
    // if this is a consonant:
    // remove the first letter and store it in a var
    // put the first letter at the end
    // add ay

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // console.log (word)
  
      if (word[0] === "q" && word[1] === "u") {
        var qU = word.splice(0, 2);
        newArr.push(word.concat(qU).join("") + "ay");
        // word.push(qU[1]);
      } else {
        var consonants = word.shift();
        console.log(consonants);
        word.push(consonants.join("") + "ay");
        console.log(word);
      }
          
      }
      //   //.join() convert array into a string
    


  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var words = pigLatin(userInput);
        

    $("#result").show();
  });
});