# Verify-API
**Gracefully generate emails and phone numbers and view content(s) sent to them!**

![image](https://user-images.githubusercontent.com/98126132/229611884-27294d93-4c93-4c05-9b93-57b589a14ef8.png)

**Verify-API Cheat Sheet**

**Overview:**
Gracefully Generate Email accounts/Phone Numbers and view contents sent to them.

**Contents**

1. [Generate Email](#1-generate-email)
2. [Get Message ID](#2-get-message-id)
3. [Get Email Body](#3-get-email-body)
4. [Generate Phone Number](#4-generate-phone-number)
5. [Get Phone Messages](#5-get-phone-messages)

### 1. Generate Email

The generateEmail function sends a request to the API to generate a new email for you, and returns an object.

**Example Usage:**
```javascript
const Genemail = await generateEmail();

console.log('[+] Generated Email: ' + Genemail.email);
console.log('[+] Cookie: ' + Genemail.cookie);
console.log('[+] XSFR Token: ' + Genemail.x_xsfr_token);
```

### 2. Get Message ID

The getMessageID function will return an array of messages received on the generated email. The array will contain the messageID, subject, and date received.

Find the messageID of the email you want to get the body of by looping through the array.

```javascript
const messages = await getMessageID(email, cookie, x_xsfr_token);

messages.forEach(message => {
  console.log(`Message ID: ${message.messageID}, Subject: ${message.subject}`);
});
```

### 3. Get Email Body

The getEmailBody function returns the body of the email you want to get the body of. You will need to pass the email and messageID of the email you want to get the body of.

**Example:**
```javascript
const emailBody = await getEmailBody(email, messageID);

console.log('[+] Email Content: ' + emailBody);
```

### 4. Generate Phone Number

The generateNumber function will return an object containing the number, country code, cookie, and xsfr token.

**Usage Example:**
```javascript
const genNumber = await generateNumber();

console.log('[+] Generated Number: ' + genNumber.number);
console.log('[+] Country_Code: ' + genNumber.country_code);
console.log('[+] Cookies: ' + genNumber.cookie);
console.log('[+] XSFR-Token: ' + genNumber.x_xsfr_token);
```

### 5. Get Phone Messages

The getPhoneMessages function will return an array of messages received on the generated phone number. The array will contain the messageID, subject, and time received.

Loop through the array of objects and find a specific provider you are looking for.

**Example:**
```javascript
const phoneMessages = await getPhoneMessages(number, cookie, x_xsfr_token);
phoneMessages.forEach(msg => {
  console.log(`Message ID: ${msg.messageID}, From: ${msg.from}, Content: ${msg.message}`);
});
```

**More Indepth**:

**Contents**

**Generate Email**:
generateEmail function sends a request to the api to generate a new email for you, and returns a object (Follow instructions to return just email)

Response:

```javascript
let obj = {
    email: GenerateEmail.data.email[0],
    cookie: `${XSFR}; ${gmailnator_session}`,
    x_xsfr_token: `${x_xsfr_token}=`
}
```
      
**Example Usage**:
```javascript
const Genemail = await generateEmail();
console.log(`[+] Generated Email: ` + Genemail.email) // returns just email generated
console.log(`[+] Generated Email: ` + Genemail.cookie) // returns cookie (only needed for getMessageID and getEmailBody function)
console.log(`[+] Generated Email: ` + Genemail.x_xsfr_token) // returns xsfr token (only needed for getMessageID and getEmailBody function)
```

**GetMessageID**:
```
getMessageID function will return an array of messages recieved on the generated email.

The array will contain the messageID, subject, and date recieved.
 
You could loop through the array and find the messageID of the email you want to get the body of.

Instructions are left in the getMessageID.js file.
```
   
**GetEmailBody**:
```
getEmailBody function will return the body of the email you want to get the body of.

You will need to pass the email and messageID of the email you want to get the body of.
```

**Example**:
```javascript
    const emailBody = await getEmailBody(email, messageID);
    console.log('[+] Email Content: ' + emailBody)
```
    
**GeneratePhoneNumber**:
```
generateNumber function will return an object containing the number, country code, cookie and xsfr token.
```
     
**Usage Example**:
```javascript
  const genNumber = await generateNumber();
  console.log(`[+] Generated Number: ` + genNumber.number)
  console.log(`[+] Country_Code: ` + genNumber.country_code)
  console.log(`[+] Cookies: ` + genNumber.cookie)
  console.log(`[+] XSFR-Token: ` + genNumber.x_xsfr_token)
```
    
**GetPhoneMessages**:
```
getPhoneMessages function will return an array of messages recieved on the generated phone number.

The array will contain the messageID, subject, and time recieved.

You could loop through the array of objects and find a specific provider you are looking for.

A Usage Example is left in the getPhoneID.js file.

Response from api:
{
    "messageID": 572134,
    "from": "Facebook",
    "message": "962630 is your Facebook code. Don't share it.",
    "time": "1 hour ago"
},
```
      
   
**FIXED ERRORS/BUGS**:
```
CSFR TOKEN Mis-Match | Status: Fixed

XSFR-TOKEN not matching| Status: Fixed
```
  
