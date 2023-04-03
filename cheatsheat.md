**emailGenWOtp Cheat Sheet**

**Overview:**
Gracefully generate email accounts and view contents sent to them.

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

**Fixed Errors/Bugs:**

- CSRF TOKEN Mis-Match | Status: Fixed
- XSFR-TOKEN not matching | Status: Fixed
