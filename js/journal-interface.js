var Journal = require("./../js/journal.js").journalModule;

$(document).ready(function(){
  $("#word-count-form").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();
    var journalCount = new Journal ("Containment", "Deadly viral outbreak in Atlanta Georgia");
    var finalWordCount = journalCount.wordCount(inputBody);
    var finalCharacterCount = journalCount.characterCount(inputBody);
    var finalVowelCount = journalCount.vowelCount(inputBody);
    var finalConsonantCount = journalCount.consonantCount(inputBody);
    $("#word-count-result").text(finalWordCount);
    $("#character-count-result").text(finalCharacterCount);
    $("#vowel-count-result").text(finalVowelCount);
    $("#consonant-count-result").text(finalConsonantCount);
  });
});
