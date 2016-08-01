(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry (newTitle, newBody) {
  this.newTitle = newTitle;
  this.newBody = newBody;
}

Entry.prototype.wordCount = function() {
  var wordCount = 0;
  var bodyArray = this.newBody.split(" ");
  for (var i = 0; i < bodyArray.length; i ++) {
    wordCount += 1;
  }
  return wordCount;
}

Entry.prototype.characterCount = function() {
  var characterCount = 0;
  var bodyArray = this.newBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
      characterCount += 1;
    }
  return characterCount;
}

Entry.prototype.vowelCount = function() {
  var vowelCount = 0;
  var bodyArray = this.newBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
    if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

Entry.prototype.consonantCount = function() {
  var consonantCount = 0;
  var bodyArray = this.newBody.replace(/\s+/g, '').split("");
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

Entry.prototype.getTeaser = function() {
  var bodyArray = this.newBody.split(" ");
  var finalArray = [];
  for (var i = 0; i < 8; i ++)
  {
    finalArray.push(bodyArray[i]);
  }
  var resultArray = finalArray.join(" ");
  return resultArray + "...";
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
function Entry (newTitle, newBody) {
  this.newTitle = newTitle;
  this.newBody = newBody;
}

Entry.prototype.wordCount = function() {
  var wordCount = 0;
  var bodyArray = this.newBody.split(" ");
  for (var i = 0; i < bodyArray.length; i ++) {
    wordCount += 1;
  }
  return wordCount;
}

Entry.prototype.characterCount = function() {
  var characterCount = 0;
  var bodyArray = this.newBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
      characterCount += 1;
    }
  return characterCount;
}

Entry.prototype.vowelCount = function() {
  var vowelCount = 0;
  var bodyArray = this.newBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
    if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

Entry.prototype.consonantCount = function() {
  var consonantCount = 0;
  var bodyArray = this.newBody.replace(/\s+/g, '').split("");
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

Entry.prototype.getTeaser = function() {
  var bodyArray = this.newBody.split(" ");
  var finalArray = [];
  for (var i = 0; i < 8; i ++)
  {
    finalArray.push(bodyArray[i]);
  }
  var resultArray = finalArray.join(" ");
  return resultArray + "...";
}

exports.entryModule = Entry;

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

},{"./../js/journal.js":1}]},{},[2]);
