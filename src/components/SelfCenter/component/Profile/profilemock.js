var Mock=require('mockjs');

var lodash = require('lodash');
    module.exports=function(){
        return {
            people:lodash.times(3,function(n){
                return {
                    name:Mock.Random.name(),
                    phone:Mock.Random.natural(),
                    address:Mock.Random.county(true),
                } 
            })
        }
    };