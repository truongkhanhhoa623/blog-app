const auth = require('./auth')
const article = require('./article')

module.exports = (router) => {
    auth(router)
    article(router)
}