require('dotenv').config();

const {times} = require('async');
const redis = require('redis');
const prefix = process.env.APP_NAME || null;
const options = { prefix: prefix };

let cycles = process.env.CYCLE || 10;

client = redis.createClient(options);
client.on('error', function onClientError(err) {
    console.log('Client Error', err);
    return client.quit();
});

times(cycles,
    function repeat(current, next) {
        client.set(`${current}`, `Value: ${current}`, function name(err, message) {
            next(err, ` ${current}:${message}`);
        });
    }, 
    function onEnd(err, result) {
        // console.log(`Some result ${result}`);
        client.mget(['3', '2', '10', '6'], function onGet(err, responses) {
            console.log(`The responses are ${responses}`);
            return client.quit();
        });
    }
);
