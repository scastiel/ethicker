Ethicker
========

Ethicker is a really simple Ether and Bitcoin ticker you can use in your terminal.

## Install

Ethicker runs with *Node.js*, you can install it directly from *npm*: `npm install -g ethicker`

## Use

With no arguments, Ethicker shows tickers for ETHBTC and ETHEUR.

```
$ ethicker
1 ETH = 0.0242 BTC
1 ETH = 9.0800 EUR
```

You can specify tickers you want as arguments:

```
$ ethicker BTCEUR
1 BTC = 373.3700 EUR
```

## Credits

Ethicker uses the [Gatecoin](https://gatecoin.com/) public API.