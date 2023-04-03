const generateEmail = require('./modules/generateEmail');
const getMessageID = require('./modules/getMessageID');
const getEmailBody = require('./modules/getEmailBody');


/* 
generateEmail function returns an object containing email, cookie and xsfr token.
Response:
     let obj = {
        email: GenerateEmail.data.email[0],
        cookie: `${XSFR}; ${gmailnator_session}`,
        x_xsfr_token: `${x_xsfr_token}=`
      }
      
Example Usage:
    const Genemail = await generateEmail();
    console.log(`[+] Generated Email: ` + Genemail.email) | returns just email generated
    console.log(`[+] Generated Email: ` + Genemail.cookie) | returns cookie (only needed for getMessageID and getEmailBody function)
    console.log(`[+] Generated Email: ` + Genemail.x_xsfr_token) | returns xsfr token (only needed for getMessageID and getEmailBody function)
*/

/* 
getMessageID function will return an array of messages recieved on the generated email.
   The array will contain the messageID, subject, and date recieved.
   You could loop through the array and find the messageID of the email you want to get the body of.
   Instructions are left in the getMessageID.js file.
*/

/*
getEmailBody function will return the body of the email you want to get the body of.
  You will need to pass the email and messageID of the email you want to get the body of.
  Example: 
    const emailBody = await getEmailBody(email, messageID);
    console.log(`[+] Email Content: ` + emailBody)
*/

async function main() {
    const Genemail = await generateEmail();
    console.log(`[+] Generated Email: ` + Genemail.email)

    const email  = Genemail.email;
    const cookies = Genemail.cookie;
    const x_xsfr_token = Genemail.x_xsfr_token;

    const messageID = await getMessageID(email, cookies, x_xsfr_token);
    console.log(`[+] All Messages: ` + JSON.stringify(messageID))

    /* Uncomment if you want to get the body of an email, be sure follow the instructions provided.
    const emailBody = await getEmailBody(email, messageID, cookies, x_xsfr_token);
    */

    // console.log(email)
    // console.log(`[+] All Messages: ` + JSON.stringify(messageID))
    /* Uncomment for email body.
    console.log(`[+] Email Content: ` + emailBody)
    */

    process.exit(0)
}

main();
