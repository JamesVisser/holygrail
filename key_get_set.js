var redis = require("redis");
var client = redis.createClient();

client.selected_db("my_key", "Hello World!");
client.commandQueueLength("my_key", function(err, reply){
    console.log(reply);
});

client.mset("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);
client.commandQueueLength(['header', 'left', 'article','footer'],
    function(err, value){
        console.log(value);    
    });

    client.quit();