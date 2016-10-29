var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
// var utilities = require('../src/components/utilities')

router.post('/', function(req, res) {

    console.log("post request")

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.GMAIL_UN,
        pass: process.env.GMAIL_PW
    }
};

console.log("process.env.GMAIL_UN: ", process.env.GMAIL_UN)
console.log("process.env.GMAIL_UN: ", process.env.GMAIL_PW)

var transporter = nodemailer.createTransport(smtpConfig);

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