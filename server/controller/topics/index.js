var Router = require('koa-router')
var topic = new Router()
const topicApi = require('../../api/topics');

topic.get('/describeTopics',async (ctx) => {
    var page = ctx.query.page
    var limit =  ctx.query.limit
    var tab =  ctx.query.tab
    var mdrender = ctx.query.mdrender
    var params = {
        page:page,
        limit:limit,
        tab:tab,
        mdrender:mdrender
    }
    let topicResult = await topicApi.describeTopics(ctx, params, {})
    ctx.body = topicResult; 
} )

topic.get('/describeTopic', async (ctx)=>{
    var id = ctx.query.id
    let topicResult = await topicApi.describeTopic(ctx, id, {}, {})
    ctx.body = topicResult; 
})
module.exports = topic


