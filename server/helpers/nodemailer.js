"use strict";
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "why.yuragil@gmail.com",
        pass: "vyqa znbe ufva afxc",
    },
    tls: {
        rejectUnauthorized: false, // Nonaktifkan verifikasi sertifikat
    },
});

async function main(email) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: {
            name: 'Library of programmer',
            address: "why.yuragil@mail.com"
        },
        to: email, // list of receivers
        subject: "register for member Library of Programmer",
        text: 'Congratullation! now you are member from Library of Programmer! Please Login http://localhost:5173/login'
    });

    // console.log('');
}


module.exports = {
    main
}