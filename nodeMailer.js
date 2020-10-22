var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    server: 'gmail',
    auth : {
        user: 'juberbadi@gmail.com',
        pass: '12345'
    }
});

var mailOptions = {
    from: 'juberbadi@gmail.com',
    to: 'juberpatel@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Email sent : ", info.response);
    }
})