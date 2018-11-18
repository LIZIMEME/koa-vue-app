module.exports = async function (ctx,next) {
    try{
        await next()
    }catch(err){
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
}