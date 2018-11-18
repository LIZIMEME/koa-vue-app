const request = require('../util/request')
const config = require('config')
module.exports = {
    describeTopics(ctx,params = {},opt = {}){
        return request.bizFetch(config.get('openApi_cnode'),"/api/v1/topics",ctx,params,opt)
    },
    describeTopic(ctx,id,params = {},opt = {}){
        return request.bizFetch(config.get('openApi_cnode'),"/api/v1/topic/"+id,ctx,params,opt)
    }
}