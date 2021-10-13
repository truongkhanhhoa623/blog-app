const  fetch = require('node-fetch');


module.exports = (req, res, next) => { 
        const { userID, accessToken } = req.body
        let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`
        fetch(urlGraphFacebook,{
            method: 'GET',
        })
        .then(res=> res.json())
        .then(res=>{
            const {email, name} = res
            console.log("userFacebook",res)
        })
    }
