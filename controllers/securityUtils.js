//const OktaJwtVerifier = require('@okta/jwt-verifier');

//Authenticate and validate access token
  function validationRequired(req, res, next, scopes) {

	//Extract the Access token
    // const authHeader = req.headers.authorization || '';
    // const match = authHeader.match(/Bearer (.+)/);
    //
    // if (!match) {
    //   return res.status(401).end();
    // }
    // const accessToken = match[1];

	//Initiate OktaJwtVerifier
    // const verifier = new OktaJwtVerifier({
    //   issuer: 'https://oktaice###.oktapreview.com/oauth2/a###############',
    //   clientId: 'okta.client.id',
    //   assertClaims: {
    //     aud: 'http://localhost:5000',
    //     'scp.includes': scopes
    //   }
    // });

	//Verify the access token
  //   verifier.verifyAccessToken(accessToken)
  //     .then((jwt) => {
  //       req.jwt = jwt;
  //       next();
  //     })
  //     .catch((err) => {
  //       res.status(401).send(err.message);
  //     });
  // }

module.exports.validationRequired = validationRequired;
