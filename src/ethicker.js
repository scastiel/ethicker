#!/usr/bin/env node

var request = require('request-promise');
var util = require('util');
var numeral = require('numeral');

var tickersToShow = process.argv.slice(2);
if (tickersToShow.length === 0) {
	tickersToShow = ['ETHBTC', 'ETHEUR'];
}

request({ url: 'https://www.gatecoin.com/api/Public/LiveTickers', json: true })
	.then(function(response) {
		tickersToShow.forEach(function(tickerToShow) {
			response.tickers.forEach(function(ticker) {
				if (ticker.currencyPair === tickerToShow) {
					var last = ticker.last;
					var fromCurrency = tickerToShow.slice(0, 3);
					var toCurrency = tickerToShow.slice(3);
					var formattedLast = numeral(last).format('0,0.0000');
					var string = util.format('1 %s = %s %s', fromCurrency, formattedLast, toCurrency);
					console.log(string);
				}
			});
		});
	});
