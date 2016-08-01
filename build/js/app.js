(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/journal.js":2}],2:[function(require,module,exports){
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

Journal.prototype.characterCount = function (inputBody) {
  var characterCount = 0;
  var bodyArray = inputBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
      characterCount += 1;
    }
  return characterCount;
}

Journal.prototype.vowelCount = function (inputBody) {
  var vowelCount = 0;
  var bodyArray = inputBody.split("");
  for (var i = 0; i < bodyArray.length; i++) {
    if (bodyArray[i] === "a" || bodyArray[i] === "e" || bodyArray[i] === "i" || bodyArray[i] === "o" || bodyArray[i] === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

Journal.prototype.consonantCount = function (inputBody) {
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

exports.journalModule = Journal;

},{}]},{},[1]);
