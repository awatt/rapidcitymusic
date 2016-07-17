import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');


var sendMail = function(email, text){

// console.log('email: ', email)
// console.log('text: ', text)

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: email, // sender address 
    to: 'awatt11215@gmail.com', // list of receivers 
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

export default sendMail;
 
