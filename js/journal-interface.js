var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $("#submit-btn").click(function() {
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();
    var entryCount = new Entry ("Containment", "Deadly viral outbreak in Atlanta Georgia");
    var finalWordCount = entryCount.wordCount(inputBody);
    var finalCharacterCount = entryCount.characterCount(inputBody);
    var finalVowelCount = entryCount.vowelCount(inputBody);
    var finalConsonantCount = entryCount.consonantCount(inputBody);
    $("#word-count-result").text(finalWordCount);
    $("#character-count-result").text(finalCharacterCount);
    $("#vowel-count-result").text(finalVowelCount);
    $("#consonant-count-result").text(finalConsonantCount);
  });
  $("#teaser-btn").click(function() {
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();
    var entryCount = new Entry ("Containment", "Deadly viral outbreak in Atlanta Georgia");
    var finalTeaserArray = entryCount.getTeaser(inputBody);
    $("#teaser-result").text(finalTeaserArray);
  });
});
