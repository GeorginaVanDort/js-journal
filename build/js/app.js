(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports.journalModule = Journal;

},{}]},{},[1]);
