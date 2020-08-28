
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '372165893061-itqi8lgjhjb1oi0ihao18lu97rfam644.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '372165893061-lpvt6d5mc2dqhmkjb32p1r0r1hd18kr9.apps.googleusercontent.com',
                '372165893061-o9sr3nipc4voct9cbrvsrjt346nufc8c.apps.googleusercontent.com'
            ],  
        });
        const payload = ticket.getPayload();

        console.log('============ PAYLOAD ============= ');
        console.log( payload );
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return null;
    }

   
}


module.exports = {
    validarGoogleIdToken
}

