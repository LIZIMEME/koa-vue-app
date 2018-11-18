const Koa = require('koa')
const serve = require('koa-static')
const bodyParse = require('koa-bodyparser')
const config = require('config')
const Router = require('koa-router')
const views = require('koa-views')
const debug = require('debug')('consoleServer:app')
// router
var topicRouter = require('./controller/topics/index')

const app = new Koa()
app.use(bodyParse())
app.use(serve(__dirname + '/public'))
app.use(views(__dirname + '/views'))

app.use(require('./middleware/error'))
// 装载路由
let router = new Router();
// router.use('/',home.routes(),home.allowedMethods());
// 命名空间page下的路由
// page/404
// page/hello
router.use('/api/topic',topicRouter.routes(),topicRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods())
/*路由*/
app.use(async(ctx)=>{
    await ctx.render('index')
});
app.listen(config.get('port'));
debug('listen to port ' + config.get('port'))
