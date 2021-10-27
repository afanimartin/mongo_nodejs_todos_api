const {auth} = require('express-oauth2-jwt-bearer');

const checkJWTToken = auth({
  audience: process.env.AUTH0_API_IDENTIFIER,
  issuerBaseUrl: process.env.ISSUER_BASE_URL,
})

module.exports = checkJWTToken;
