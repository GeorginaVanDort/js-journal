var Journal = require("./../js/journal.js").journalModule;

$(document).ready(function(){
  $("#word-count-form").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();
    var journalWordCount = new Journal ("Containment", "Deadly viral outbreak in Atlanta Georgia");
    var finalWordCount = journalWordCount.wordCount(inputBody);
    $("#word-count-result").text(finalWordCount);
    console.log(finalWordCount);
  });
});
