var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var utilities = require('../src/components/utilities')

// router.get('/', function response(req, res) {
//     res.send('got to email route');
//   });

// router.get('/:name/:address', function(req, res) {
router.post('/', function(req, res) {

  res.send('email route req.body, :', req.body);
  // create reusable transporter object using the default SMTP transport 


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

var text = req.params.name + ', ' + req.params.address + ' would like to join the rapid city mailing list!';
var email = 'rapidcitymail@gmail.com';

function sendMail(email, text){

console.log('email: ', email)
console.log('text: ', text)
            

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: email, // sender address 
    to: email, // list of receivers 
    subject: 'RapidCityMusic Email List Submission', // Subject line 
    text: text, // plaintext body 
};

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        console.log('mailOptions: ', mailOptions)
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });


}

sendMail(email, text)

});


module.exports = router;
 
