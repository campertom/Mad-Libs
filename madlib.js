// javascript
// mad libs

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";

    // Your code below this line

    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

    
    //Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:
    var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
    // Your code above this line

                                  //just makinhg sure it sinks in this time-third time is a charm//

  return result;
}

// Change the words here to test your function

wordBlanks("dog", "big", "ran", "quickly");