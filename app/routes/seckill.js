var express = require('express');
var router = express.Router();
var redis = require('redis');
var bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var kafkaClient = kafka.Client;
var client = new kafkaClient('192.168.99.118:2181');
var producer = new Producer(client, {
    requireAcks: 1
});
var count = 0;
//var client= redis.createClient(6379,"192.168.99.113",{password:"test123"});
 var client= redis.createClient(6379,"192.168.99.118");
router.post('/seckill', function (req, res) {
    count++
    client.multi().get('counter').decr("counter").execAsync().then(function(reply) {
        if (reply[1] >= 0) {
            var payload = [
                {
                    topic: 'CAR_NUMBER',
                    messages: '購買成功，還剩下'+parseInt(reply[1])+'個',
                    partition: 0
                }
            ];
            producer.send(payload, function (err, data) {
                 console.log(data);
            });
            console.log('購買成功，還剩下'+parseInt(reply[1])+'個')
            res.json({messages:'購買成功，還剩下'+parseInt(reply[1])+'個'})
        } else {
            client.set("counter","0")
            console.log('搶完了'+parseInt(reply[1])+'個')
            res.json({messages:'搶完了'})

        }
    })
});
client.on('error', function (er) {
    console.trace('Here I am');
    console.error(er.stack);
    client.end(true);
});
router.get('/getCount', function (req, res) {
    client.multi().get('counter').execAsync().then(function(reply) {
        res.json({num:parseInt(reply[0])})

    })
})
module.exports = router;