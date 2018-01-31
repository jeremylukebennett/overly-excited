// Create an array that contains the words in the sentence
// The walrus danced through the trees in the light of the moon
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let nextSentence = ["This", "is", "the", "next", "sentence", "that", "I", "am", "writing", "right","about", "now"]

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, userChoice) {
    var holding = "";
    var choiceAccumulator = userChoice;
    for (let i = 0; i < theWordArray.length; i++) {

        if( (i + 1) % 3 === 0) {
            holding += theWordArray[i] + choiceAccumulator + " ";
            console.log(holding);
            choiceAccumulator += userChoice;
        } 
        else {
            holding += theWordArray[i] + " ";
            console.log(holding);
        }
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");
addExcitement(nextSentence, "!");