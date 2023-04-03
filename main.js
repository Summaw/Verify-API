const generateEmail = require('./modules/generateEmail');
const getMessageID = require('./modules/getMessageID');
const getEmailBody = require('./modules/getEmailBody');


/* 
generateEmail function sends a request to the api to generate a new email for you, and returns the email address.
*/

/* getMessageID function will return an array of messages recieved on the generated email.
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
    const email = await generateEmail();
    const messageID = await getMessageID(email);
    /* Uncomment if you want to get the body of an email, be sure follow the instructions provided.
    const emailBody = await getEmailBody(email, messageID);
    */

    console.log(`[+] Generated Email: ` + email)
    console.log(`[+] All Messages: ` + JSON.stringify(messageID))
    /* Uncomment for email body.
    console.log(`[+] Email Content: ` + emailBody)
    */

    process.exit(0)
}

main();