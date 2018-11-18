module.exports = class BizError extends Error{
    constructor(message,status,extra){
        super(message)
        Error.captureStackTrace(this,this.contructor)
        this.name = this.contructor.name
        this.status = status||500
        this.extra = extra
    }
}