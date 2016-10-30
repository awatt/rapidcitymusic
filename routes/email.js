var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
// var config = require('../src/components/utilities');
var xoauth2 = require('xoauth2');

router.post('/', function(req, res) {

    console.log("post request")

// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: process.env.GMAIL_UN,
//         pass: process.env.GMAIL_PW
//     }
// };

// console.log("process.env.GMAIL_UN: ", process.env.GMAIL_UN)
// console.log("process.env.GMAIL_PW: ", process.env.GMAIL_PW)

// var transporter = nodemailer.createTransport(smtpConfig);


// listen for token updates (if refreshToken is set)
// you probably want to store these to a db
// generator.on('token', function(token){
//     console.log('New token for %s: %s', token.user, token.accessToken);
// });

// login
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         xoauth2: xoauth2.createXOAuth2Generator({
//             user: config.mailUser,
//             clientId: config.clientId,
//             clientSecret: config.clientSecret,
//             refreshToken: config.refreshToken
//             // accessToken: '{cached access token}'
//         })
//     }
// });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: process.env.MAIL_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
            // accessToken: '{cached access token}'
        })
    }
});

var text = req.body.email + ' would like to join the Rapid City mailing list!  Message: ' + req.body.message;
var email = 'rapidcitymail@gmail.com';

function sendMail(email, subject, message){
            
var mailOptions = {
    from: 'rapidcitymail@gmail.com', // sender address 
    to: email, // list of receivers 
    subject: subject, // Subject line 
    text: message, // plaintext body 
};

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        console.log("sendmail run")
        if(error){
            console.log(error);
            res.end("error")
        } else {
            console.log('Message sent: ' + info.response);
            res.send({result:"success"})
        }
        
    });

}

sendMail(req.body.email, req.body.subject, req.body.message)

});

module.exports = router;