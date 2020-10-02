var nodemailer= require("nodemailer");
var transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kishori07.official@gmail.com',
        pass:'iamkishori07'
    }
})
//send email
var maildetails={
    from:'kishori07.official@gmail.com',
    to:'imkish.desh@gmail.com',
    subject:'hello !! ',
    text:'hey you there ?'
}
transport.sendMail(maildetails,function(err,result){
    if(err){
        console.log(err);
    }
    else{
        console.log("Email Sent" +result.response);
    }
})