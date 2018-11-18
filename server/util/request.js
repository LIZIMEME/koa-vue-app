const fetch = require('node-fetch')
const debug = require('debug')('consoleServer:lib:request')
const BizError = require('./error/bizError')
const withQuery = require('with-query')
const util = require('util')
const querystring = require('querystring')
// get url 
function bizFetch(serviceUrl,url,ctx,params = {} ,opt){
    var formatUrl = util.format('%s%s?%s',serviceUrl,url,querystring.stringify(params)) 
    debug('send request to ' + formatUrl)
    return fetch(formatUrl, opt).then(function (response) {
        return response.json().then(function (result) {
            if (response.ok) {
                return result
            }
            ctx.throw(response.status, new BizError(result.message || "BizError", response.status, result));
        }, function (result) {
            ctx.throw(500, new Error(result));
        });
    });
}
// todo 
//  change to post
// add serviceUrl
function oizFetch(url, ctx, params = {}, opt ={}){
    if(!opt.headers){
        opt.headers = {}
    }
    opt.headers['Content-Type'] = 'application/json'
    opt.json = {}
    return fetch(url,opt).then(function(response){
        return response.json().then(function(result){
            if(response.ok){
                return result
            }
            ctx.throw(response.status, new BizError(result.message || "BizError", response.status, result))
        })
    },function(err){
        ctx.throw(500, new Error(result))
    })
}

module.exports = {
    oizFetch: oizFetch,
    bizFetch:bizFetch
}