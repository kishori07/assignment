var readline=require('readline');
var {google}=require('googleapis');
var bodyParser = require('body-parser');
var express=require('express');
var app=express();
var fs = require('fs');
var router=express.Router();
app.use(bodyParser.json());
app.use(express.urlencoded({extendet:true}));

// to link the gmail
  const SCOPES= [
    'https://www.googleapis.com/auth/gmail.send'

];
//get token 
const TOKEN_PATH = 'token.json';

  // Load client secrets from a local file.
fs.readFile('cre.json', (err, content) => {
        if (err)
            return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Gmail API.
        authorize(JSON.parse(content));
    });
    let oAuth2Client;
//to get credentials call 
  function authorize(credentials) {
    const {client_secret, client_id, redirect_uris} =  credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
        fs.readFile(TOKEN_PATH, (err, token) => {
            if (err) return getNewToken(oAuth2Client);
            oAuth2Client.setCredentials(JSON.parse(token));
    
          });
        }
        //to get authUrl
        function getNewToken(oAuth2Client) {
            const authUrl = oAuth2Client.generateAuthUrl({
              access_type: 'offline',
              scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
        }

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', (code) => {
          rl.close();
        oAuth2Client.getToken(code,(err,token)=>{
console.log(err,"----------------------------");
oAuth2Client.setCredentials(token);

fs.writeFile(TOKEN_PATH,JSON.stringify(token),(err)=>{
if(err)return console.log(err);
console.log('token stored to',TOKEN_PATH);
})   
 })
})
    
//send email
        async function sendEmail(auth){
          const gmail= google.gmail({version:'v1',auth});
          let encodedMessage = 'hk78bjhg';
          let email = await gmail.users.messages.send({
            userId:'me',
            resource:{
              raw : encodedMessage,
            }
          })
          return email;
        }
