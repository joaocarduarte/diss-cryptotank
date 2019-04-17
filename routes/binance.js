const binance = require('node-binance-api')().options({
    APIKEY: '4bm1MNJnoMoF4klIcCJGPxwmf12Q9yixlY7mf8ecNIy2VDtrSQkAzpqJvrV8KNwE',
    APISECRET: '2IUkF2L9pQfUCHlxDB7aPpprk9PVIDEhoJ10WpKp8N8DdXYmkVAN2AwuwFqOAFJI',
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    test: true // If you want to use sandbox mode where orders are simulated
});

//Gets the initial XLM price
binance.prices('XLMBTC', (error, ticker) => {
    module.exports.xlmPrice = ticker.XLMBTC;
    console.log("Initial XLM Price: "+ ticker.XLMBTC);
});

//Every 10 sec gets the XLM price at that moment
setTimeout(function() { //1 sec timeout on the first iteration
    setInterval(function() {
        binance.prices('XLMBTC', (error, ticker) => {
            module.exports.xlmPrice = ticker.XLMBTC;
            console.log("XLM Price: "+ ticker.XLMBTC);
        });
    }, 120*1000);
}, 1000);