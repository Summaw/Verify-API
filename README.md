# emailGenWOtp
**Gracefully generate email accounts and view contents sent to them.**


**Contents**

**Generate Email**:

`generateEmail function sends a request to the api to generate a new email for you, and returns the email address.`

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
    
 **Known Error**:
      
      `CSFR TOKEN Mis-Match, I will be fixing soon!`
      
      `XSFR-TOKEN not matching, I will also be fixing this soon!`
      
  
  
