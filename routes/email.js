var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var utilities = require('../src/components/utilities')

router.post('/', function(req, res) {

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: utilities.gmailUN,
        pass: utilities.gmailPW
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

var text = req.body.email + ' would like to join the Rapid City mailing list!  Message: ' + req.body.message;
var email = 'rapidcitymail@gmail.com';

function sendMail(email, text){
            
var mailOptions = {
    from: email, // sender address 
    to: email, // list of receivers 
    subject: 'RapidCityMusic Email List Submission', // Subject line 
    text: text, // plaintext body 
};

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

}

sendMail(email, text)

});

module.exports = router;