var Mock=require('mockjs');

var lodash = require('lodash');
    module.exports=function(){
        return {
            people:lodash.times(1,function(n){
                return {
                    accountstate:"安全",
                    locked:1,
                    stars:Mock.mock({
                        'number|1-100':100,
                        'usemoney|200-1000':1000,
                        'allmoney|2000-10000':10000,
                    })
                } 
            })
        }
    };