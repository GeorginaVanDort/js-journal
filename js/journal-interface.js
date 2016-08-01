var Entry = require("./../js/journal.js").entryModule;

var createEntry = function() {
  var inputTitle = $("#title").val();
  var inputBody = $("#body").val();
  var newEntry = new Entry (inputTitle, inputBody);
  return newEntry;
};

$(document).ready(function() {
  $("#submit-btn").click(function() {
    var newEntry = createEntry();
    var finalWordCount = newEntry.wordCount();
    var finalCharacterCount = newEntry.characterCount();
    var finalVowelCount = newEntry.vowelCount();
    var finalConsonantCount = newEntry.consonantCount();
    $("#word-count-result").text(finalWordCount);
    $("#character-count-result").text(finalCharacterCount);
    $("#vowel-count-result").text(finalVowelCount);
    $("#consonant-count-result").text(finalConsonantCount);
  });
  $("#teaser-btn").click(function() {
    var newEntry = createEntry();
    var finalTeaserArray = newEntry.getTeaser();
    $("#teaser-result").text(finalTeaserArray);
  });
});
