var Mock=require('mockjs');

var lodash = require('lodash');
    module.exports=function(){
        return {
            people:lodash.times(1,function(n){
                return {
                    img:Mock.Random.image('160x160',Mock.Random.color()),
                    name:Mock.Random.name(),
                    phone:Mock.Random.integer(),
                    emails:Mock.Random.float(),
                    account:"安全",
                    stars:Mock.mock({
                        'number|1-100':100,
                    })
                } 
            })
        }
    };