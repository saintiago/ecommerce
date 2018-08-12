// @flow
import front from './front';

if (process.argv.length < 4) {
    console.log('What size and how many t-shirts do you want? (for example: xl 5)');
    process.exit(0);
}

// TODO Validate args
const size = process.argv[2];
const qty = +process.argv[3];

front.requestPurchase(size, qty);