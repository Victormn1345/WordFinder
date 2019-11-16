

function patternMatch(pattern, word) {
    for(var i = 0; i < word.length; i++){
        if(pattern.charAt(i) != "." && pattern.charAt(i) != word.charAt(i)) {
            return false;
        }
    }
    return true;
}

function validPattern(pattern, wordLength) {
    if(pattern.length != wordLength) {
        return false;
    }
    console.log("GOING FOR LOOPS");
    for(var i = 0; i < wordLength; i++){
        var c = pattern.charAt(i);
        console.log(pattern.charAt(i));
        console.log(c.toLowerCase() != c.toUpperCase());
        if(c.toLowerCase() == c.toUpperCase() || c == '.'){
            return false;
        }
    }
    return true;
}

function getWords() {
    var wordLength = document.getElementById("wordLength").value;
    console.log(wordLength);
    var pattern = document.getElementById("pattern").value;
    console.log(pattern);
    var valid = validPattern(pattern, wordLength);
    
    if(valid == true){
        var PossibleWords = document.getElementById("PossibleWords");
        var numRows = PossibleWords.getElementsByTagName('tr').length;

        //Resets the table for new submit calls.
        for(var i = 0; i < numRows; i++){
            PossibleWords.deleteRow(0);
        }
        for(var i = 0; i < sowpods.length; i++){
            var tr = document.createElement('tr');
            word = sodpows[i];
            if(word.length == wordLength){
                tr.appendChild(document.createTextNode(word));
            }
        }
        PossibleWords.appendChild(tr);

        var contentDiv = document.getElementById("content");
        contentDiv.appendChild(PossibleWords); 
    }
    else{
        alert("Please enter a valid pattern using the format given.")
    }
}