function Entry(newTitle, newBody) {
  this.newTitle = newTitle;
  this.newBody = newBody;
}

Entry.prototype.wordCount = function (inputBody) {
  var wordCount = 0;
  var bodyArray = inputBody.split(" ");
  for (var i = 0; i < bodyArray.length; i ++) {
    wordCount += 1;
  }
  return wordCount;
}

Entry.prototype.characterCount = function (inputBody) {
  var characterCount = 0;
  var bodyArray = inputBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
      characterCount += 1;
    }
  return characterCount;
}

Entry.prototype.vowelCount = function (inputBody) {
  var vowelCount = 0;
  var bodyArray = inputBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
    if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

Entry.prototype.consonantCount = function (inputBody) {
  var consonantCount = 0;
  var bodyArray = inputBody.replace(/\s+/g, '').split("");
  for (var i = 0; i < bodyArray.length; i++) {
    if (bodyArray[i] !== "a" && bodyArray[i] !== "e" && bodyArray[i] !== "i" && bodyArray[i] !== "o" && bodyArray[i] !== "u") {
      consonantCount += 1;
    }
    else {
      consonantCount += 0;
    }
  }
  return consonantCount;
}

Entry.prototype.getTeaser = function (inputBody) {
  var bodyArray = inputBody.split(" ");
  var finalArray = [];
  for (var i = 0; i < 8; i ++)
  {
    finalArray.push(bodyArray[i]);
  }
  var resultArray = finalArray.join(" ");
  return resultArray + "...";
}

exports.entryModule = Entry;
