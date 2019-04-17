const binance = require('./binance');
const coinbase = require('./coinbase');

module.exports = {
    getIndexPage: (req, res) => {
        db.query("SELECT * FROM account WHERE account_id=2", (err, result) => {
            if (err) {
                throw(err);
            }
            res.render('index.ejs', {
                title: "CryptoTank",
                currentFiat: result[0].fiat_balance,
                currentCrypto: result[0].crypto_balance,
                maxCrypto: maxCrypto,
                minCrypto: minCrypto,
                xlmPrice: binance.xlmPrice,
                btcPrice: coinbase.btcPrice
            });
        });
    },
};