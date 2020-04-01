// business logic
function pigLatin(userInput) {
  var words = userInput.split(" ");
  // console.log(words);
  var newArr = []

  for (i = 0; i < words.length; i++) {
    var word = words[i].split("");
    // console.log(word);

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
          var qU = word.splice(0,2);
          newArr.push(word.concat(qU).join("") + "ay");
          // word.push(qU[1]);
          console.log(newArr);
        }

        
      
    //   //remove "qu" from beginning of word and hold in a variable
    //   // push the removed letters onto the end
    //   //.join() convert array into a string
    // }
      }
  }
}


// user interface logic aka "the party"
$(document).ready(function () {
  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var words = pigLatin(userInput);
        

    $("#result").show();
  });
});