# emailGenWOtp
**Gracefully generate email accounts and view contents sent to them.**

![image](https://user-images.githubusercontent.com/98126132/229611884-27294d93-4c93-4c05-9b93-57b589a14ef8.png)


**Contents**

 **Generate Email**:

     `generateEmail function sends a request to the api to generate a new email for you, and returns a object (Follow instructions to return just email)`
     `Response:`
     `let obj = {
        email: GenerateEmail.data.email[0],
        cookie: `${XSFR}; ${gmailnator_session}`,
        x_xsfr_token: `${x_xsfr_token}=`
      }
      
**Example Usage**:

    const Genemail = await generateEmail();
    
    console.log(`[+] Generated Email: ` + Genemail.email) | returns just email generated
    
    console.log(`[+] Generated Email: ` + Genemail.cookie) | returns cookie (only needed for getMessageID and getEmailBody function)
    
    console.log(`[+] Generated Email: ` + Genemail.x_xsfr_token) | returns xsfr token (only needed for getMessageID and getEmailBody function)`

 **GetMessageID**:

     `getMessageID function will return an array of messages recieved on the generated email.`

     `The array will contain the messageID, subject, and date recieved.`

     `You could loop through the array and find the messageID of the email you want to get the body of.`

     `Instructions are left in the getMessageID.js file.`
   
**GetEmailBody**:

     `getEmailBody function will return the body of the email you want to get the body of.`

     `You will need to pass the email and messageID of the email you want to get the body of.`

**Example**:
  
    `const emailBody = await getEmailBody(email, messageID);`
    
    `console.log('[+] Email Content: ' + emailBody)`
    
**GeneratePhoneNumber**:

     `generateNumber function will return an object containing the number, country code, cookie and xsfr token.`
     
**Usage Example**:

     `const genNumber = await generateNumber();
     
      console.log(`[+] Generated Number: ` + genNumber.number)
      
      console.log(`[+] Country_Code: ` + genNumber.country_code)
      
      console.log(`[+] Cookies: ` + genNumber.cookie)
      
      console.log(`[+] XSFR-Token: ` + genNumber.x_xsfr_token)`
      
**GetPhoneMessages**:

     `getPhoneMessages function will return an array of messages recieved on the generated phone number.`
     
     `The array will contain the messageID, subject, and time recieved.`
     
     `You could loop through the array of objects and find a specific provider you are looking for.`
     
     `A Usage Example is left in the getPhoneID.js file.`
     
     `Response from api:
     {
         "messageID": 572134,
         "from": "Facebook",
         "message": "962630 is your Facebook code. Don't share it.",
         "time": "1 hour ago"
     },`
      
   
 **FIXED ERRORS/BUGS**:
      
      `CSFR TOKEN Mis-Match | Status: Fixed`
      
      `XSFR-TOKEN not matching| Status: Fixed`
      
  
  
