const user = require('./user')
const article = require('./article')
const auth  =require('./auth')

module.exports = (router) => {
    user(router)
    article(router)
    auth(router)
}