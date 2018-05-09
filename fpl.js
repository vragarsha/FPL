// JavaScript source code
"use strict"
var casper = require('casper').create({
	verbose: true,
	loglevel: 'debug'
});
var utils = require('utils');
var playing11 = ['#root > div > div.ism-container > div > div.ism-main > div.ism-squad-wrapper > div > div:nth-child(2) > div > div.ism-pitch > div > div:nth-child(1) > div:nth-child(3) > div > a > div',
				 '#root > div > div.ism-container > div > div.ism-main > div.ism-squad-wrapper > div > div:nth-child(2) > div > div.ism-pitch > div > div:nth-child(2) > div:nth-child(1) > div > a > div',
				 '#ismr-pos3 > div > div > div > span > div >','#ismr-pos4 > div > div > div > span > div >',
				 '#ismr-pos5 > div > div > div > span > div >','#ismr-pos6 > div > div > div > span > div >',
				 '#ismr-pos7 > div > div > div > span > div >','#ismr-pos8 > div > div > div > span > div >',
				 '#ismr-pos9 > div > div > div > span > div >','#ismr-pos10 > div > div > div > span > div >',
				 '#ismr-pos11 > div > div > div > span > div >'
				];
var team = 'https://draft.premierleague.com/entry/648334/event/28';
var final_points = '#root > div > div.ism-container > div > div.ism-main > div.ism-scoreboard-points > div > div > div';
var captain = 'Kane';
var chars = [];
var numbs = [];
/*print("Captain Name:\t");
var userInput = require('readline').readline();
print("User input: " + userInput);*/

casper.start(team, function () {
    this.echo(this.getTitle());
    this.capture('test.png');
});
/*
casper.thenOpen('http://phantomjs.org', function () {
    this.echo(this.getTitle());
});*/
/*casper.waitForSelector(final_points,function(){
    var player_data = this.getElementInfo(final_points).text;
    player_data = player_data.replace(/\s+/g, '').trim();
    this.echo(player_data);
    chars.push(player_data.slice(0, player_data.search(/\d/)));
	numbs.push(player_data.replace(chars, ''));
    //this.echo(chars);
    //this.echo(numbs);
    //utils.dump(this.getElementInfo(selectors[0]).text);
});*/

casper.then(function(){
	casper.waitForSelector(final_points,function(){
    var player_data = this.getElementInfo(final_points).text;
    player_data = player_data.replace(/\s+/g, '').trim();
    this.echo(player_data);
});
	casper.waitForSelector(playing11[1],function(){
		this.echo(this.getElementInfo(playing11[1]).text);
	});

});

/*casper.then(function(){
	console.log(chars);
	console.log(numbs);
});*/
casper.run();