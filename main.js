const generateEmail = require('./modules/generateEmail');
const getMessageID = require('./modules/getMessageID');
const getEmailBody = require('./modules/getEmailBody');
const generateNumber = require('./modules/generatePhone');
const getPhoneMessages = require('./modules/getPhoneID');


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


[+] GetMessageID [+] 
getMessageID function will return an array of messages recieved on the generated email.
   The array will contain the messageID, subject, and date recieved.
   You could loop through the array and find the messageID of the email you want to get the body of.
   Instructions are left in the getMessageID.js file.



getEmailBody function will return the body of the email you want to get the body of.
  You will need to pass the email and messageID of the email you want to get the body of.
  Example: 
    const emailBody = await getEmailBody(email, messageID);
    console.log(`[+] Email Content: ` + emailBody)


generateNumber function will return an object containing the number, country code, cookie and xsfr token.
  Usage Example:
    const genNumber = await generateNumber();
    console.log(`[+] Generated Number: ` + genNumber.number)
    console.log(`[+] Country_Code: ` + genNumber.country_code)
    console.log(`[+] Cookies: ` + genNumber.cookie)
    console.log(`[+] XSFR-Token: ` + genNumber.x_xsfr_token)

getPhoneMessages function will return an array of messages recieved on the generated phone number.
  The array will contain the messageID, subject, and time recieved.
  You could loop through the array of objects and find a specific provider you are looking for.
  A Usage Example was left in the getPhoneID.js file.
  Response from api:
    {
        "messageID": 572134,
        "from": "Facebook",
        "message": "962630 is your Facebook code. Don't share it.",
        "time": "1 hour ago"
    },
*/

async function main() {
    //Email Example:
    const genEmail = await generateEmail();
    const getMessageID = await getMessageID(genEmail.email, genEmail.cookie, genEmail.x_xsfr_token);
    const emailBody = await getEmailBody(genEmail.email, getMessageID);   
    
    
    //Phone Example:
    const genNumber = await generateNumber();
    const getPhoneMessages = await getPhoneMessages(genNumber.number, genNumber.country_code, genNumber.cookie, genNumber.x_xsfr_token);
    /*
      getPhoneMessages output:
      {
        "messageID": 572134,
        "from": "Facebook",
        "message": "962630 is your Facebook code. Don't share it.",
        "time": "1 hour ago"
    },
    */

    process.exit(0)
}

main();
