function Journal(newTitle, newBody) {
  this.newTitle = newTitle;
  this.newBody = newBody;
}

Journal.prototype.wordCount = function (inputBody) {
  var wordCount = 0;
  var bodyArray = inputBody.split(" ");
  for (var i = 0; i < bodyArray.length; i ++) {
    wordCount += 1;
  }
  return wordCount;
}

exports.journalModule = Journal;
