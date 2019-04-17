var Client = require('coinbase').Client;
var client = new Client({'apiKey': 'YJIpw0DSCUawBLLA', 'apiSecret': '19GNh4wnU6uhDXZWAkrYhRtXrgS2PPyn'});

//Gets the initial BTC price
client.getBuyPrice({'currencyPair': 'BTC-EUR'}, function(err, obj) {
    module.exports.btcPrice = obj.data.amount;
    console.log('Initial BTC Price: ' + obj.data.amount);
});

//Every 10 sec gets the BTC price at that moment
setInterval(function() {
    client.getBuyPrice({'currencyPair': 'BTC-EUR'}, function(err, obj) {
        module.exports.btcPrice = obj.data.amount;
        var d = new Date();
        console.log('--------------------- '
                + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
                +'\nBTC Price: ' + obj.data.amount);
    });
}, 120*1000);