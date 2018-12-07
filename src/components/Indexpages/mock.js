
module.exports = function(){
    var Mock = require('mockjs');
var lodash = require('lodash');
    return {
        people:lodash.times(15,function(n){
            return {
                id:n,
                img:Mock.Random.image('250x250',Mock.Random.color()),
                title:Mock.Random.ctitle(20),
                price:Mock.mock({
                    "number|99-10000": 100
                  })
            }
        })
    }
}